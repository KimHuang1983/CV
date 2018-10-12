class Correlation {
    constructor() {
        this.arrayX = []
        this.arrayY = []
        this.arraySqrX = []
        this.arraySqrY = []
        this.arrayXY = []
    }

    setArray(input, firstInput) {
        let tempArray = input.split('\n');
        if (firstInput) {
            this.arrayX = tempArray.map(Number);
        }
        else {
            this.arrayY = tempArray.map(Number);
        }
    }

    dataLength() {
        if (this.arrayX.length === this.arrayY.length) {
            return this.arrayX.length
        }
        else {
            return false
        }
    }

    computeArrays(x, y) {
        this.arrayXY = Array()
        this.arraySqrY = Array()
        this.arraySqrX = Array()

        for (let i = 0; i < this.dataLength(); i++) {
            let xy = x[i] * y[i]
            let yy = y[i] * y[i]
            let xx = x[i] * x[i]
            this.arrayXY.push(xy)
            this.arraySqrY.push(yy)
            this.arraySqrX.push(xx)
        }
    }

    computeSum(inputArray) {
        let sum = inputArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        )
        return sum
    }

    getCorrelation() {
        let result = ''

        if (!this.dataLength()) {
            return 'Error: Input data is not equal length!'
        } else {
            let n = this.dataLength()
            this.computeArrays(this.arrayX, this.arrayY)

            let sumOfArraySqrX = this.computeSum(this.arraySqrX)
            let sumOfArraySqrY = this.computeSum(this.arraySqrY)
            let sumOfArrayXY = this.computeSum(this.arrayXY)
            let sumOfArrayX = this.computeSum(this.arrayX)
            let sumOfArrayY = this.computeSum(this.arrayY)

            result = ((n * sumOfArrayXY - sumOfArrayX * sumOfArrayY) / Math.sqrt((n * sumOfArraySqrX - Math.pow(sumOfArrayX, 2)) * (n * sumOfArraySqrY - Math.pow(sumOfArrayY, 2)))).toFixed(10)
            console.log('sumOfArraySqrX is: ' + sumOfArraySqrX)
            console.log('sumOfArraySqrY is: ' + sumOfArraySqrY)
            console.log('sumOfArrayXY is: ' + sumOfArrayXY)
            console.log('sumOfArrayX is: ' + sumOfArrayX)
            console.log('sumOfArrayY is: ' + sumOfArrayY)
            return result
        }
    }
}

module.exports = {
    Correlation: Correlation
}