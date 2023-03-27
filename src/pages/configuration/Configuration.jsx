import React from 'react';
import Filter from './Filter/Filter';
import CategoryCar from './CategoryCar/CategoryCar';

function Configuration() {
  const [categoryCarID, setCategoryCarID] = React.useState(0);
  const [categoryID, setcategoryID] = React.useState(0);
  return (
    <div className="body">
      <div className="bodyDate">
        <CategoryCar value={categoryCarID} onClickCategoryCar={(i) => setCategoryCarID(i)} />
        <Filter value={categoryID} onClickategoryID={(i) => setcategoryID(i)} />
      </div>
    </div>
  );
}

export default Configuration;
