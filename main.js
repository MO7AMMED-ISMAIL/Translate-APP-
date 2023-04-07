

let btn = document.getElementById('btn');

// btn.onclick = function(){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://127.0.0.1:5000/hello');
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             const data = JSON.parse(xhr.responseText);
//             console.log(data);
//         } else {
//             console.log('Error:', xhr.statusText);
//         }
//     };
//     xhr.onerror = function() {
//         console.log('Error:', xhr.statusText);
//     };
//     xhr.send();
// }


btn.onclick = function(){
    fetch('http://localhost:5000/hello').then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));
}