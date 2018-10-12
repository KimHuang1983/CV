class Regression extends Correlation {
  constructor() {
    super()
    this.beta1 = ""
    this.beta0 = ""
  }

  getRegression() {
    let result = ''
    if (!this.dataLength()) {
      return 'Error: Input data is not equal length!'
    } else {
      let n = this.dataLength()
      console.log('----------------------------------------')
      console.log('the data length is :' + n)
      this.computeArrays(this.arrayX, this.arrayY)

      let xAverage = this.computeSum(this.arrayX) / n
      let yAverage = this.computeSum(this.arrayY) / n
      let sumOfArrayXY = this.computeSum(this.arrayXY)
      let sumOfArraySqrX = this.computeSum(this.arraySqrX)
      this.beta1 = ((sumOfArrayXY - n * xAverage * yAverage) / (sumOfArraySqrX - n * Math.pow(xAverage, 2))).toFixed(5)
      this.beta0 = (yAverage - this.beta1 * xAverage).toFixed(5)
      console.log('the xAverage is :' + xAverage)
      console.log('the yAverage is :' + yAverage)
      console.log('the sumOfArrayXY is :' + sumOfArrayXY)
      console.log('the sumOfArraySqrX is :' + sumOfArraySqrX)
      return result = `Y = ${this.beta0} + ${this.beta1} * X`
    }
  }
}
