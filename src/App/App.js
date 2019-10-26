import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from '../components/header';
import InQueue from '../components/inQueue';
import InProgress from '../components/inProgress';
import IsDone from '../components/isDone';
import AddNew from '../components/addNew';
import { connect } from 'react-redux';
import { loadCardsAsync } from '../actions';

function App() {
  const [isActive, setActive] = useState(false);
  const [cardList, setCardList] = useState([]);
  const pathname = 'http://localhost:8080';

  const fetchData = async () => {
    const res = await fetch(pathname);
    const data = await res.json();
    setCardList(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(cardList);
  return (
    <div className="App">
      <Header active={isActive} set={setActive} />
      <AddNew active={isActive} set={setActive} />
      <div className="columnContainer">
        <InQueue />
        <InProgress />
        <IsDone />
        {cardList.length > 0 ? (
          <>
            {cardList.map(e => (
              <div key={e.id}>
                <h3>{e.title}</h3>
                <h3>{e.body}</h3>
                <h3>{e.priority_id}</h3>
                <h3>{e.status_id}</h3>
                <h3>{e.created_by}</h3>
                <h3>{e.assigned_to}</h3>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {};
// };

export default App;
