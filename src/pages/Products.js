import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Products = async () => {
  const id = getHash();
  // const product = await getData(id);
  const view = `
    <div class="products-inner">
      <h1>Contenido de tu sección</h1>
    </div>
  `;
  return view;
};

export default Products;