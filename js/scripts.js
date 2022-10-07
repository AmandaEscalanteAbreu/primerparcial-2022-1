renderProductos(drinks){
    let result = ""
    drinks.forEach((drink) =>{
        result += `
        <div class="drink">
        <div class="image__container">
        <img src=${drink.strDrinkthrumb} alt="">
    </div>
      <div class="producto__footer">
        <h1>${drink.strDrink}</h1>
        <div class="rating">
          <span>
            <i class="bx bxs-star"></i>
          </span>
          <span>
            <i class="bx bxs-star"></i>
          </span>
          <span>
            <i class="bx bxs-star"></i>
          </span>
          <span>
            <i class="bx bxs-star"></i>
          </span>
          <span>
            <i class="bx bx-star"></i>
          </span>
        </div>
        <div class="ingredients">$${drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4}</div>
      </div>
      <div class="bottom">
        <div class="btn__group">
          <button class="btn addToCart" data-id=${drink.idDrink}>Añadir carrito</button>
          <a href="producto-detalles.html?id=${drink.idDrink}" class="btn view">Vista</a>
        </div>
      </div>
    </div>
            `
    });
    productoDOM.innerHTML = result
}
