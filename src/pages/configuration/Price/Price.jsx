import './price.scss';

function Price({ value1, onClickPrice1, value2, onClickPrice2 }) {
  return (
    <div className="price">
      <label for="text" className="name">
        Цена:
      </label>
      <div className="price-form">
        <input
          className="price-from browser-default"
          value={value1}
          onChange={(e) => onClickPrice1(e.target.value)}
          accept="number"
          type="number"
          id="price-from"
          placeholder=" от"
          minLength="1"
          maxLength="9"
        />

        <input
          className="price-for browser-default"
          value={value2}
          onChange={(e) => onClickPrice2(e.target.value)}
          type="number"
          id="price-for"
          placeholder=" до"
          required
          minLength="1"
          maxLength="9"
          data-marker="price/to"
        />
      </div>
    </div>
  );
}

export default Price;
