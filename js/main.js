var form = document.querySelector('.formulario-principal')
form.addEventListener('submit', verificarLogin);


function verificarLogin(event) {
    event.preventDefault();

    const loginInput = document.getElementById('login').value.toLowerCase();
    const senhaInput = document.getElementById('senha').value;
    var validador = 0;

    fetch('usuario.json')
        .then(response => response.json())
        .then(usuarios => {
            usuarios.forEach(usuario => {
                if(usuario.login === loginInput && usuario.senha === senhaInput) {
                    validador = 1;
                }
            })

            if (validador === 1) {
                console.log('Seja bem vindo(a)'+ loginInput);
                window.location.href = 'lista.html';
            } else {
                console.log('Senha ou login não cadastrado');
            }
            // const usuarioEncontrado = usuarios.find(usuario => usuario.login === loginInput && usuario.senha === senhaInput);

            // if (usuarioEncontrado) {
            //     console.log('Acesso permitido! Bem-vindo, ' + usuarioEncontrado.login + '.');
            // } else {
            //     console.log('Acesso negado. Nome ou senha incorretos. Tente novamente.');
            // }
        })
        .catch(error => {
            console.error('Erro ao ler o arquivo usuarios.json:', error);
        });
}