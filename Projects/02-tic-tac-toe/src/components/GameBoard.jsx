import { Square } from './Square';
import PropTypes from 'prop-types';

export const GameBoard = ({ board, updateBoard }) => {
    return (
        <section className='game'>
            {
                board.map((_, index) => {
                    return (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                        >
                            {board[index]}
                        </Square>
                    )
                })
            }
        </section>
    );
}

GameBoard.propTypes = {
    board: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateBoard: PropTypes.func.isRequired
};
