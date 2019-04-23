import React from 'react';
import Header from './Header'
import ScheduleList from './ScheduleList';
import ProductList from './ProductList';

function App(){
  return (
    <div>
      <style jsx>{`
        .columns {
          display: grid;
          grid-template-columns: 50% 50%;
          margin-left: 20%;
        }
      `}</style>
      <div>
        <Header/>
        <div className="columns">
          <div>
            <ScheduleList/>
          </div>
          <div>
            <ProductList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;