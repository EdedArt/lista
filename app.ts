class Pedido {
    id:number
    descripcion:string
    total:number

    constructor(id:number, descripcion:string){
        this.id = id
        this.descripcion = descripcion
        this.total = Math.floor(Math.random()*40)+10
    }
}

class Restaurante {
    contador:number = 1

    listaPedidos:Pedido[] = []
    cocina:Pedido[] = []
    servidos:Pedido[] = []
    cuentas:Pedido[] = []

    crearPedido(descripcion:string){
        let pedido = new Pedido(this.contador++, descripcion)
        this.listaPedidos.push(pedido)
        this.actualizarVista()
    }

    enviarCocina(){
        if(this.listaPedidos.length == 0) return
        let pedido = this.listaPedidos.shift()
        if(pedido){
            this.cocina.push(pedido)
        }
        this.actualizarVista()
    }

    servirPedido(){
        if(this.cocina.length == 0) return
        let pedido = this.cocina.shift()
        if(pedido){
            this.servidos.push(pedido)
        }
        this.actualizarVista()
    }

    solicitarCuenta(){
        if(this.servidos.length == 0) return
        let pedido = this.servidos.shift()
        if(pedido){
            this.cuentas.push(pedido)
        }
        this.actualizarVista()
    }

    pagarPedido(){
        if(this.cuentas.length == 0) return
        let pedido = this.cuentas.shift()
        if(pedido){
            alert("Pago realizado: $" + pedido.total)
        }
        this.actualizarVista()
    }

    actualizarVista(){
        const estado = document.getElementById("estado") as HTMLElement
        estado.innerText =
        "Pedidos solicitados:\n" +
        this.listaPedidos.map(p=>p.descripcion).join(", ") +
        "\n\nEn cocina:\n" +
        this.cocina.map(p=>p.descripcion).join(", ") +
        "\n\nServidos:\n" +
        this.servidos.map(p=>p.descripcion).join(", ") +
        "\n\nEn caja:\n" +
        this.cuentas.map(p=>p.descripcion).join(", ")
    }
}

const sistema = new Restaurante()

function crearPedido(){
    const input = document.getElementById("pedido") as HTMLInputElement
    if(input.value.trim() === "") return
    sistema.crearPedido(input.value)
    input.value = ""
}

function enviarCocina(){
    sistema.enviarCocina()
}

function servirPedido(){
    sistema.servirPedido()
}

function solicitarCuenta(){
    sistema.solicitarCuenta()
}

function pagarPedido(){
    sistema.pagarPedido()
}