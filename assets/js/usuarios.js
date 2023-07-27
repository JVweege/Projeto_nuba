let frm = document.querySelector("form");
let tbody = document.querySelector("tbody");
const url = 'http://localhost:3000/usuarios';

const listar = () => {
    const list = document.createDocumentFragment();
    frm.reset();
    frm.id.value = '';
    frm.nome.focus();
    frm.enviar.value = 'Criar';
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let usuarios = data;
            tbody.innerText = '';
            usuarios.map(function(usuario) {
                let tr = document.createElement('tr');
                let id = document.createElement('td');
                let nome = document.createElement('td');
                let email = document.createElement('td');
                let senha = document.createElement('td');
                let cpf = document.createElement('td');
                let rg = document.createElement('td');
                let telefone = document.createElement('td');
                let cep = document.createElement('td');
                let excluir = document.createElement('td');
                
                id.innerHTML = `${usuario.id}`
                nome.innerHTML = `${usuario.nome}`;
                email.innerHTML = `${usuario.email}`;
                senha.innerHTML = `${usuario.senha}`;
                cpf.innerHTML = `${usuario.cpf}`;
                rg.innerHTML = `${usuario.rg}`;
                telefone.innerHTML = `${usuario.telefone}`;
                cep.innerHTML = `${usuario.cep}`;
                excluir.innerHTML = "EXCLUIR";

                tr.appendChild(id);
                tr.appendChild(nome);
                tr.appendChild(email);
                tr.appendChild(senha);
                tr.appendChild(cpf);
                tr.appendChild(rg);
                tr.appendChild(telefone);
                tr.appendChild(cep);
                tr.appendChild(excluir);
                list.appendChild(tr);
            });
            tbody.appendChild(list);
        })
        .catch(function(error) {
            console.log(error);
        });
}

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    if(!frm.id.value){
        let request = new Request(url, {
            method: 'POST',
            body: JSON.stringify(value),
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        });

        fetch(request)
            .then(function() {
                listar();
            });
    } else {
        let request = new Request(url+'/'+frm.id.value, {
            method: 'PUT',
            body: JSON.stringify(value),
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        });

        fetch(request)
            .then(function() {
                listar();
            });
    }
});

frm.btListar.addEventListener("click", (e) => {
    e.preventDefault();
    listar();
});

tbody.addEventListener("click", function(e) {
    const id = e.target.parentNode.firstChild.innerHTML;
    if (e.target.innerHTML === 'EXCLUIR'){
        let request = new Request(url+'/'+id, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        });

        fetch(request)
            .then(function() {
                listar();
            });
    } else {
        
        const list = document.createDocumentFragment();
        fetch(url+'/usuario/'+id)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let usuarios = data;
                usuario.map(function(usuario) {
                    frm.id.value = usuario.id;
                    frm.nome.value = usuario.nome;
                    frm.email.value = usuario.email;
                    frm.senha.value = usuario.senha;
                    frm.cpf.value = usuario.cpf;
                    frm.rg.value = usuario.rg;
                    frm.telefone.value = usuario.telefone;
                    frm.cep.value = usuario.cep;
                    frm.enviar.value = 'Alterar';
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    }
});