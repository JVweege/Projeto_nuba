let frm = document.querySelector("form");
let tbody = document.querySelector("tbody");
const url = 'http://localhost:3000/empresa';

const listar = () => {
    const list = document.createDocumentFragment();
    frm.reset();
    frm.id.value = '';
    frm.nome.focus();
    frm.enviar.value = 'enviar';
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let empresa = data;
            tbody.innerText = '';
            empresa.map(function(empresa) {
                let tr = document.createElement('tr');
                let id = document.createElement('td');
                let nome = document.createElement('td');
                let email = document.createElement('td');
                let senha = document.createElement('td');
                let cnpj = document.createElement('td');
                let tipo = document.createElement('td');
                let telefone = document.createElement('td');
                let cep = document.createElement('td');
                let excluir = document.createElement('td');
                
                id.innerHTML = `${empresa.id}`
                nome.innerHTML = `${empresa.nome}`;
                email.innerHTML = `${empresa.email}`;
                senha.innerHTML = `${empresa.senha}`;
                cnpj.innerHTML = `${empresa.cnpj}`;
                tipo.innerHTML = `${empresa.tipo}`;
                telefone.innerHTML = `${empresa.telefone}`;
                cep.innerHTML = `${empresa.cep}`;
                excluir.innerHTML = "EXCLUIR";

                tr.appendChild(id);
                tr.appendChild(nome);
                tr.appendChild(email);
                tr.appendChild(senha);
                tr.appendChild(cnpj);
                tr.appendChild(tipo);
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
        fetch(url+'/empresa/'+id)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let empresa = data;
                empresa.map(function(empresa) {
                    frm.id.value = empresa.id;
                    frm.nome.value = empresa.nome;
                    frm.email.value = empresa.email;
                    frm.senha.value = empresa.senha;
                    frm.cnpj.value = empresa.cnpj;
                    frm.tipo.value = empresa.tipo;
                    frm.telefone.value = empresa.telefone;
                    frm.cep.value = empresa.cep;
                    frm.enviar.value = 'Alterar';
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    }
});