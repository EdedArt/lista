var Pedido = /** @class */ (function () {
    function Pedido(id, descripcion) {
        this.id = id;
        this.descripcion = descripcion;
        this.total = Math.floor(Math.random() * 40) + 10;
    }
    return Pedido;
}());
var Restaurante = /** @class */ (function () {
    function Restaurante() {
        this.contador = 1;
        this.listaPedidos = [];
        this.cocina = [];
        this.servidos = [];
        this.cuentas = [];
    }
    Restaurante.prototype.crearPedido = function (descripcion) {
        var pedido = new Pedido(this.contador++, descripcion);
        this.listaPedidos.push(pedido);
        this.actualizarVista();
    };
    Restaurante.prototype.enviarCocina = function () {
        if (this.listaPedidos.length == 0)
            return;
        var pedido = this.listaPedidos.shift();
        if (pedido) {
            this.cocina.push(pedido);
        }
        this.actualizarVista();
    };
    Restaurante.prototype.servirPedido = function () {
        if (this.cocina.length == 0)
            return;
        var pedido = this.cocina.shift();
        if (pedido) {
            this.servidos.push(pedido);
        }
        this.actualizarVista();
    };
    Restaurante.prototype.solicitarCuenta = function () {
        if (this.servidos.length == 0)
            return;
        var pedido = this.servidos.shift();
        if (pedido) {
            this.cuentas.push(pedido);
        }
        this.actualizarVista();
    };
    Restaurante.prototype.pagarPedido = function () {
        if (this.cuentas.length == 0)
            return;
        var pedido = this.cuentas.shift();
        if (pedido) {
            alert("Pago realizado: $" + pedido.total);
        }
        this.actualizarVista();
    };
    Restaurante.prototype.actualizarVista = function () {
        var estado = document.getElementById("estado");
        estado.innerText =
            "Pedidos solicitados:\n" +
                this.listaPedidos.map(function (p) { return p.descripcion; }).join(", ") +
                "\n\nEn cocina:\n" +
                this.cocina.map(function (p) { return p.descripcion; }).join(", ") +
                "\n\nServidos:\n" +
                this.servidos.map(function (p) { return p.descripcion; }).join(", ") +
                "\n\nEn caja:\n" +
                this.cuentas.map(function (p) { return p.descripcion; }).join(", ");
    };
    return Restaurante;
}());
var sistema = new Restaurante();
function crearPedido() {
    var input = document.getElementById("pedido");
    if (input.value.trim() === "")
        return;
    sistema.crearPedido(input.value);
    input.value = "";
}
function enviarCocina() {
    sistema.enviarCocina();
}
function servirPedido() {
    sistema.servirPedido();
}
function solicitarCuenta() {
    sistema.solicitarCuenta();
}
function pagarPedido() {
    sistema.pagarPedido();
}
