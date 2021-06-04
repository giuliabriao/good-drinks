export async function PesquisaCategoriaAlc(categoria) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${categoria}`);
    const dados = await response.json();
    console.log(dados.drinks.IdDrink);

    const idDrink = dados.drinks.map(drink => drink.idDrink)
    console.log(idDrink);

    return dados.drinks;
}

export async function PesquisaCategoria(categoria) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`);
    const dados = await response.json();
    return dados.drinks;
}

export async function PesquisaCategoriaCopo(categoria) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${categoria}`);
    const dados = await response.json();
    return dados.drinks;
}