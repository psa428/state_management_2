import '../App.css';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { selectField } from '../../selectors';

export function FieldLayout({arry, onClickCl})  {

    const field = useSelector(selectField);

     
    return (
        <table>
            {
                field.map((row, i) => (
                    <tr className='table-row' key={i} id_row={i}>
                        {
                            row.map((ceil, j) => (
                                <td className='table-ceil' key={j} id_col={j} 
                                     onClick={() => onClickCl(i, j)}
                                    >{ceil}</td>
                                  
                            ))
                        }
                    </tr>
                ))
            }
        </table>                       
    );
};

FieldLayout.propTypes = {
    arry:    PropTypes.array,
    onClickCl:  PropTypes.func
}