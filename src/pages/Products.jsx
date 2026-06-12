import Header from "../components/Header";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <>
      <Header />

      <div style={{ padding: "20px" }}>
        <h1>Products</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;