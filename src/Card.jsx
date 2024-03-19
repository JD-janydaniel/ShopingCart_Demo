function Card({ product, addToCart, cart }) {
  return (
    <div className="col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={product.image}
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Rs:{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            class="btn btn-primary"
            disabled={cart.some((item) => item.id === product.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
