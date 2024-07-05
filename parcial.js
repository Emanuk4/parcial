
const medidasGalpones = [
    { nombre:"galpon1", largo: 50, ancho: 100 },
    { nombre:"galpon2", largo: 60, ancho: 200 },
    { nombre:"galpon3", largo: 70, ancho: 300 },
]

function medidasGalpones(largo, ancho){
    let area = largo + ancho
    let sumaArea = area.reduce((areasTotales, area) => { return areasTotales + area; }, 0);
    let areasTotales = 0;
    for (let area of areasTotales) {
    areasTotales += area;
    return sumaArea;
}
}

const maquinariaPesada = [
    { nombreMaquina: "Torno Industrial", superficieDeOperacionRequerida: 40 }
    { nombreMaquina: "Torno Industrial2", superficieDeOperacionRequerida: 60 }
    { nombreMaquina: "Torno Industrial3", superficieDeOperacionRequerida: 80 }
]
function superficieEdificio(){
    if (maquinariaPesada || superficieDeOperacionRequerida === 40){
    }else(console.log("true")) 
    if(maquinariaPesada || superficieDeOperacionRequerida === 60){
    }else(console.log("false"))
    if(maquinariaPesada || superficieDeOperacionRequerida === 80){
    }else(console.log("false"))
}



const inversores = [
    { nombre: "Lopez Mena", capital: 30000 }
    { nombre: "Lopez Mena", capital: 2000 }
    { nombre: "Lopez Mena", capital: 1000000 }
]
function filtrarInversoresVIP(){
    const inversoresMillonarios = []
    const capitalFiltrado = capital.filter(capital => capital === 1000000 )
    alert(numerosFiltrados)
    capitalFiltrado.push(inversoresMillonarios)
}
  

function crearLiHTML(){
    let listado = document.createElement('ul')
    let list = document.createElement('li');
    let robots =[
      { nombre: "Robot Triturador1", cantidad: 5 },
      { nombre: "Robot Triturador2", cantidad: 7 },
      { nombre: "Robot Triturador3", cantidad: 6 },
    ]
    listado.list.textContent = robots
    return list;
}
crearLiHTML()



class robot {
    mecanica({nombres, precio, tamanio}){
        this.nombres = nombres
        this.distancia = distancia
        this.oph = oph
    }
}



