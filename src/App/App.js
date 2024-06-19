// import { useState } from 'react';
import '../components/App.css';
import { AppLayout } from '../components/AppLayout/appLayout';
import { gameOver } from '../utils/utils';
// import { store } from '../store';
import { useSelector } from 'react-redux';
import { selectField } from '../selectors'; 
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const field = useSelector(selectField);
  
  const newGame = () => {
    /********************************************************
        Подготовка к началу новой игры
    *********************************************************/
      
        dispatch({type: 'NEW_GAME'});
  };

  const treatOnClick = (i, j) => {
    /********************************************************
      Функция обработки события выполнения хода игроком
    **********************************************************/
    
    if (field[i][j] !== 'X' && field[i][j] !== '0') {
       dispatch({ type: 'CLICK', payload: {i, j}});

       //  Игра окончена?
       let res = gameOver(field);
       if ( res !== '') {
          // установим признак завершения игры
          dispatch({type: 'GAME_IS_OVER'});

          // если ничья
          if (res === 'Ничья' )
            dispatch({type: 'IS_DRAW'});
      }  
      else {
        //  Сменим текущего игрока
        dispatch({type: 'SET_NEXT_PLAYER' })
        
      }  
      }
  };   
  
  
  return (
    <div className="App">
      <AppLayout 
         onClickCeil={treatOnClick} 
         onClickBtn = {newGame}
      />
     
    </div>
  );
}

export default App;
