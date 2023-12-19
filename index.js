const kn = document.getElementById('kn');
const result = document.getElementById('resultado');

function calcular(){
    let n = kn.value;

    n = n * 101.97162;

    result.innerHTML = n + "kgf/m<sup>2<sup>";
}