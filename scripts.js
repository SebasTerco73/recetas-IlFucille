let texto = document.getElementById("receta");
let recetaEncontrada;
function cargarReceta(nombreBuscado) {
     recetaEncontrada = recetas.find(recetas => recetas.nombre === nombreBuscado);
    texto.innerHTML = `<div style="text-align: center">"${recetaEncontrada.nombreCompleto.replace(/\n/g, "<br>")}"</div><div style="font-weight: bold; text-decoration: underline; text-align: center"><br>Ingredientes: </div>${recetaEncontrada.ingredientes.replace(/\n/g, "<br>")}<br><br><div style="font-weight: bold; text-decoration: underline; text-align: center">Instrucciones: </div>${recetaEncontrada.instrucciones.replace(/\n/g, "<br>")}`;
    agregarImagen();
    texto.style.textAlign = "left";

}

function agregarImagen() {
    const imagen = document.createElement("img");
    imagen.alt = "Imagen ilustrativa";
    // if (recetaEncontrada.tipo === 'pizza') {
    //     imagen.src = "img/pizza.png";
    // } else if (recetaEncontrada.tipo === 'pasta') {
    //     imagen.src = "img/pasta.png";
    // } else if (recetaEncontrada.tipo === 'carne') {
    //     imagen.src = "img/carne.png";
    // } else if (recetaEncontrada.tipo === 'postre') {
    //     imagen.src = "img/postre.png";
    // }
    recetaEncontrada.tipo === 'pizza' ? imagen.src = "img/pizza.png" :
        recetaEncontrada.tipo === 'pasta' ? imagen.src = "img/pasta.png" :
            recetaEncontrada.tipo === 'carne' ? imagen.src = "img/carne.png" :
                recetaEncontrada.tipo === 'postre' ? imagen.src = "img/postre.png" : null;
    
    imagen.style.position = "absolute";            
    texto.appendChild(imagen);
    imagen.style.top = "40%";
    imagen.style.left = "75%";
    imagen.style.transform = "translate(-50%, -50%)";
    imagen.style.width = "20%";
    imagen.style.height = "auto";
}


let recetas = [

    {
        nombreCompleto: "Pizza Carbonara",
        nombre: "carbonara",
        tipo: "pizza",
        ingredientes: `
        • Masa de pizza casera o refrigerada
        • Nata líquida para cocinar
        • Bacon
        • Queso Mozzarella
        • Sal para el bacon
        • Champiñones laminados
        • Pimienta negra molida
        • Queso rallado para pizza`,
        instrucciones: `
        La receta de la carbonara que vamos a usar para hacer la pizza no es la de la receta de la salsa carbonara auténtica, la que se hace sin nata, sino la que se suele utilizar en las recetas de pizza carbonara de la mayoría de cadenas de restaurantes y empresas de pizza a domicilio, es decir la que se elabora con bacon, nata, champiñones y queso.
        `
    },

    {
        nombreCompleto: "Lasaña de carne a la boloñesa",
        nombre: "lasaña",
        tipo: "pasta",
        ingredientes: `
        • Salsa boloñesa
        • Láminas de pasta para lasaña
        • Queso rallado para gratinar
        • Mantequilla
        • Harina de trigo
        • Leche
        • Sal`,
        instrucciones: `
        Partimos de la base que tenemos lista nuestra boloñesa con la que rellenar la lasaña. Existen infinidad de recetas de esta famosa elaboración italiana, pero nosotros os recomendamos la receta de salsa boloñesa de Orson Welles que, aunque poco ortodoxa, es una auténtica delicia. No obstante, podéis usar la salsa boloñesa tradicional auténtica o la salsa que más os guste.
        `
    },

    {
        nombreCompleto: "Pollo all cacciatora",
        nombre: "pollo",
        tipo: "carne",
        ingredientes: `
        • Muslos de pollo
        • Hojas de Laurel
        • Vino tinto
        • Anchoas
        • Tomate triturado
        • Aceite de oliva virgen extra
        • Harina de trigo
        • Pimienta negra molida`,
        instrucciones: `
        Comenzar salpimentando los zancos de pollo con sal y pimienta negra. Ponerlos en un bol y añadirles un diente de ajo machacado, las hojas de laurel y la ramita de romero. Añadir el vino tinto cubriendo la carne y dejarlo marinar como mínimo una hora o incluso mejor toda una noche en la nevera. Cuando el pollo esté marinado, escurrirlo y secarlo con papel de cocina, después enharinarlo sacudiendo el exceso de harina.
        `
    },

    {
        nombreCompleto: "Tiramisú",
        nombre: "tiramisu",
        tipo: "postre",
        ingredientes: `
        • Queso mascarpone atemperado
        • Huevos camperos
        • Café (bebida) frío
        • Azúcar
        • Cacao en polvo puro
        • Bizcochos de soletilla caseros
        &nbsp;&nbsp;(savoiardi o novara)`,
        instrucciones: `Preparamos el café y lo dejamos enfriar. Para acelerar el proceso lo podemos verter sobre una fuente amplia en una capa fina. Enfriará en cuestión de 15-20 minutos. Separamos las yemas de las claras de los huevos. Montamos las claras a punto de nieve ligero y reservamos. A continuación batimos las yemas con el azúcar hasta blanquear y que el azúcar se disuelva completamente, que no se note el granillo. La crema quedará con un color amarillo pálido.
        `
    }
];

