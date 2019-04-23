import React from 'react';
import Header from './Header'
import ScheduleList from './ScheduleList';
import ProductList from './ProductList';

function Home(){
  return (
    <div>
      <style jsx>{`
        .columns {
          display: grid;
          grid-template-columns: 50% 50%;
          margin-left: 20%;
        }
        .background {
          background-image: url("https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
          background-repeat: no-repeat;
          position: relative;
          background-position: center center;
          background-attachment: fixed;
          background-size: cover;
          color: white;
          text-shadow: .5px .5px black;
        }
      `}</style>
      <div className="background">
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

export default Home;