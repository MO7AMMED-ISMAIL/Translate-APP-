from flask import Flask, request, jsonify
from flask_cors import CORS
from googletrans import Translator
from flask_cors import cross_origin

app = Flask(__name__)
CORS(app)
CORS(app, resources={
    r'/api/*': {
    'origins': 'http://localhost:8080',
    'methods': ['GET', 'POST'],
    'headers': ['Content-Type', 'Authorization']
    }
})
translator = Translator()
@app.route('/translate',methods=['POST','GET'])
@cross_origin()
def translate():
    data = request.json
    text = data.get('text')
    target_lang = data.get('To')
    print(target_lang)
    translation = translator.translate(text, dest=target_lang)
    translated_text = translation.text
    return jsonify({'translated': translated_text})

if __name__ == '__main__':
    app.run(debug=True)

