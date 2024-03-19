function CartItem({ item, removeFromCart }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{item.name}</div>
        {item.price}
      </div>
      <button
        onClick={() => removeFromCart(item)}
        className="badge text-bg-danger rounded-pill"
      >
        X
      </button>
    </li>
  );
}

export default CartItem;
