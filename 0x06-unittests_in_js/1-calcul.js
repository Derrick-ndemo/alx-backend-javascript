/*
Basic test With Mocha and Node assertion library
*/


function calculateNumber(type, a, b) {
    /**
     * calculate number
     */
    let roundA = Math.round(a);
    let roundB = Math.round(b);
    
    if (type === 'SUM') {
        return roundA + roundB;
    }
    else if (type === 'SUBTRACT') {
        return roundA - roundB;
    }
    else if (type === 'DIVIDE') {
        if (roundB === 0) {
            return 'Error';
        }
        return roundA / roundB;
    }
    else {
        throw new Error('Invalid type. Use SUM,  SUBTRACT, OR DIVIDE.');
    }
}

module.exports = calculateNumber;