function calcular() {
    var txtv = window.document.querySelector('input#txtvel');
    var res = window.document.querySelector('div#res');
    var vel = Number(txtv.value);
    res.innerHTML = `<p>Você está em uma pista de <strong>80Km/h</strong>.<br><br>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
    if (vel >= 80) {
       res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade!</p>`
    }else if (vel < 80 && vel >= 20) {
        res.innerHTML += `<p>Você está dentro das regras de trânsito. Cuidado ao dirigir a pista.</p>`
        }else if (vel > 0 && vel < 20) {
            res.innerHTML += `<p>Por favor, acelere a velocidade, você pode causar um acidente.</p>`
            }else {
                res.innerHTML = `<p>Insira um valor válido.</p>`
                }
                res.innerHTML += `<p id="answer">Dirija sempre com cinto de segurança. <strong>BEBA COM MODERAÇÃO!</strong></p>`
}