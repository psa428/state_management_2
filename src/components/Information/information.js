import { InformationLayout } from "./informationLayout";
import PropTypes from 'prop-types';

import { useSelector } from "react-redux";
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from "../../selectors";


export function Information() {

    const isDraw = useSelector(selectIsDraw);
    const isGameEnded = useSelector(selectIsGameEnded);
    const currentPlayer = useSelector(selectCurrentPlayer);

    
     
    
    let message;
    if (isDraw)
            message = 'Ничья';
    else if (isGameEnded) 
        message = 'Победа ' + currentPlayer;   
        
    else
        message = "Играет " + currentPlayer;

    return (
        <div className="information" >
            <InformationLayout msg={message} />

        </div>
    )
};

Information.propTypes = {
    player:     PropTypes.string,
    gameState:  PropTypes.bool,
    draw:       PropTypes.bool
}