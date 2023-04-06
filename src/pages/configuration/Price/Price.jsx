import './price.scss';

function Price({ value1, onClickPrice1, value2, onClickPrice2 }) {
  return (
    <div className="price">
      <label for="text" className="name">
        Цена:
      </label>
      <input
        value={value1}
        onChange={(e) => onClickPrice1(e.target.value)}
        accept="number"
        type="number"
        id="price-from"
        className="price-from"
        placeholder=" от"
        required
        minLength="1"
        maxLength="9"
        data-marker="price/from"
      />
      <input
        value={value2}
        onChange={(e) => onClickPrice2(e.target.value)}
        type="number"
        id="price-for"
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
