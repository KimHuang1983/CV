describe("Check Regression Class", () => {
  describe('Test', () => {
    let myRegression
    beforeEach(() => {
      myRegression = new Regression()
      let dataX = "130\n650\n99\n150\n128\n302\n95\n945\n368\n961"
      let dataY = "186\n699\n132\n272\n291\n331\n199\n1890\n788\n1601"
      //console.log(tempData.replaceAll(',', '\n'))
      myRegression.setArray(dataX, true)
      myRegression.setArray(dataY, false)
    })

    it("arrayX should contain the test data", () => {
      expect(myRegression.arrayX).toEqual([130, 650, 99, 150, 128, 302, 95, 945, 368, 961])
    })

    it("arrayY should contain the test data", () => {
      expect(myRegression.arrayY).toEqual([186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601])
    })

    it('Compare arrayX and arrayY to be equal length', () => {
      expect(myRegression.dataLength()).toBeTruthy()
    })

    it('Data length should equal to', () => {
      myRegression.dataLength()
      expect(myRegression.dataLength()).toEqual(10)
    })

    it('Sum of arrayXY should be close to', () => {
      myRegression.computeArrays(myRegression.arrayX, myRegression.arrayY)
      expect(myRegression.computeSum(myRegression.arrayXY)).toBeCloseTo(4303108)
    })

    it('Sum of ArraySqrX should be close to', () => {
      myRegression.computeArrays(myRegression.arrayX, myRegression.arrayY)
      expect(myRegression.computeSum(myRegression.arraySqrX)).toBeCloseTo(2540284)
    })

    it('Sum of xAverage should be close to', () => {
      expect(myRegression.computeSum(myRegression.arrayX) / myRegression.dataLength()).toBeCloseTo(382.8)
    })

    it('Sum of yAverage should be close to', () => {
      expect(myRegression.computeSum(myRegression.arrayY) / myRegression.dataLength()).toBeCloseTo(638.9)
    })

    it('Beta1 should be close to', () => {
      expect(myRegression.computeSum(myRegression.arrayY)).toBeCloseTo(6389)
    })

    it('Beta0 should be close to', () => {
      myRegression.getRegression()
      expect(myRegression.beta1).toBeCloseTo(1.72793)
    })
    it('Compute Correlation', function () {
      myRegression.getRegression()
      expect(myRegression.beta0).toBeCloseTo(-22.55160)
    })
  })
})
