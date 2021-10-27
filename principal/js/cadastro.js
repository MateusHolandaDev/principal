class Produto {
    constructor() {
        this.id = 1;
        this.produto = '';
        this.valor = '';
        this.fornecedor = '';
        this.quantidade = '';
        this.arrayProdutos = [];
        this.btn = 0;
    }

    salvar() {
        // alert('Funcionando')
        let produto = this.lerDados();

        if (this.validarInputs(produto)) {
            if (this.btn == 0) {
                this.adicionarDados(produto);
            } else {
                this.atualizar(this.btn);
            }
            this.adicionarTable();
            this.cancelar()
        }

    }

    lerDados() {
        let produto = {};

        produto.id = this.id;
        produto.nomeProduto = $('#nomeProduto').val();

        produto.preco = $('#precoProduto').val();

        produto.fornecedor = $('#fornecedor').val();

        produto.quantidade = $('#quantidade').val();

        return produto;

    }

    adicionarDados(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    validarInputs(produto) {
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += 'Informe o nome do produto \n';
            console.log(msg);
        }
        if (produto.preco == '') {
            msg += 'Informe o preço do produto \n';
            console.log(msg);
        }
        if (produto.fornecedor == '') {
            msg += 'Informe o fornecedor do produto \n';
            console.log(msg);
        }
        if (produto.quantidade == '') {
            msg += 'Informe a quantidade do produto \n';
            console.log(msg);
        }
        if (msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    adicionarTable() {

        let tbody = document.getElementById('tbody');
        // let tbody = $('#tbody')
        tbody.innerText = ''
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();

            let td_produto = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_fornecedor = tr.insertCell();
            let td_quantidade = tr.insertCell();
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto
            td_preco.innerText = this.arrayProdutos[i].preco
            td_fornecedor.innerHTML = this.arrayProdutos[i].fornecedor
            td_quantidade.innerHTML = this.arrayProdutos[i].quantidade

            let imgDelete = document.createElement('img')
            imgDelete.src = 'img/delete2.png'
            imgDelete.id = 'delete'
            td_acoes.appendChild(imgDelete)

            let imgEdit = document.createElement('img')
            imgEdit.src = 'img/edit.png'
            imgEdit.id = 'edit'

            td_acoes.appendChild(imgEdit)


            imgDelete.setAttribute('onclick', "produto.deletar(" + this.arrayProdutos[i].id + ")");

            imgEdit.setAttribute('onclick', "produto.editar(" + JSON.stringify(this.arrayProdutos[i]) + ")");

            console.log(JSON.stringify(this.arrayProdutos))

            // tbody.append("<tr><td>"+this.id+++"</td><td>"+this.arrayProdutos[].nomeProduto+"</td><td>"+this.arrayProdutos[i].preco+"</td><td>letra</td><td>dsada</td></tr>")
        }

    }

    deletar(idIdentificado) {

        if (confirm('Deseja deletar o produto ' + idIdentificado + ' ?')) {
            for (let i = 0; i < this.arrayProdutos.length; i++) {

                if (this.arrayProdutos[i].id == idIdentificado) {
                    this.arrayProdutos.splice(i, 1)
                    tbody.deleteRow(i)

                }
                console.log(this.arrayProdutos)
            }
        }
    }

    cancelar() {
        $('#nomeProduto').val('')
        $('#precoProduto').val('')
        $('#fornecedor').val('')
        $('#quantidade').val('')

        $('#btn1').text('Salvar');
        this.btn = 0;
    }

    editar(dados) {

        document.getElementById('nomeProduto').value = dados.nomeProduto;
        document.getElementById('precoProduto').value = dados.preco;
        document.getElementById('fornecedor').value = dados.fornecedor;
        document.getElementById('quantidade').value = dados.quantidade;

        this.btn = dados.id;
        $('#btn1').text('Atualizar')
        console.log(this.btn);
    }

    atualizar(id) {
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (id == this.arrayProdutos[i].id) {
                this.arrayProdutos[i].nomeProduto = document.getElementById('nomeProduto').value;
                this.arrayProdutos[i].preco = document.getElementById('precoProduto').value;
                this.arrayProdutos[i].fornecedor = document.getElementById('fornecedor').value;
                this.arrayProdutos[i].quantidade = document.getElementById('quantidade').value;
                console.log(this.arrayProdutos[i].nomeProduto);
            }
        }

    }

}

let produto = new Produto()

