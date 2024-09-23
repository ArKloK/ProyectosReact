import { WINNER_COMBINATIONS } from '../constants'

export const checkWinnerFrom = (newboard) => {
    for (const combination of WINNER_COMBINATIONS) {
        const [a, b, c] = combination
        if (newboard[a] && newboard[a] == newboard[b] && newboard[a] == newboard[c]) {
            return newboard[a]
        }
    }
    return null
}

export const checkEndGame = (newboard) => {
    return newboard.every((square) => square !== null)
}
