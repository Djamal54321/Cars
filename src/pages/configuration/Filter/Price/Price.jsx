import './price.scss';

function Price() {
  return (
    <div className="price">
      <label for="text" className="name">
        Цена:
      </label>
      <input
        type="text"
        id="name"
        className="price-from"
        placeholder=" от"
        required
        minLength="1"
        maxLength="9"
        data-marker="price/from"
      />
      <input
        type="text"
        id="name"
        className="price-for"
        placeholder=" до"
        required
        minLength="1"
        maxLength="9"
        data-marker="price/to"
      />
    </div>
  );
}

export default Price;
