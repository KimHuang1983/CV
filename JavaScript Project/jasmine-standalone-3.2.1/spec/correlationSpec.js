describe("Check Correlation Class", () => {
  describe('Test', () => {
    let myCorrelation
    beforeEach(() => {
      myCorrelation = new Correlation()
      let dataX = "130\n650\n99\n150\n128\n302\n95\n945\n368\n961"
      let dataY = "186\n699\n132\n272\n291\n331\n199\n1890\n788\n1601"
      //console.log(tempData.replaceAll(',', '\n'))
      myCorrelation.setArray(dataX, true)
      myCorrelation.setArray(dataY, false)
    })



    it("arrayX should contain the test data", () => {
      expect(myCorrelation.arrayX).toEqual([130, 650, 99, 150, 128, 302, 95, 945, 368, 961])
    })

    it("arrayY should contain the test data", () => {
      expect(myCorrelation.arrayY).toEqual([186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601])
    })

    it('Compare arrayX and arrayY to be equal length', () => {
      expect(myCorrelation.dataLength()).toBeTruthy()
    })

    it('Data length should equal to', () => {
      myCorrelation.dataLength()
      expect(myCorrelation.dataLength()).toEqual(10)
    })

    it('Sum of arrayXY should be close to', () => {
      myCorrelation.computeArrays(myCorrelation.arrayX, myCorrelation.arrayY)
      expect(myCorrelation.computeSum(myCorrelation.arrayXY)).toBeCloseTo(4303108)
    })

    it('Sum of ArraySqrX should be close to', () => {
      myCorrelation.computeArrays(myCorrelation.arrayX, myCorrelation.arrayY)
      expect(myCorrelation.computeSum(myCorrelation.arraySqrX)).toBeCloseTo(2540284)
    })

    it('Sum of ArraySqrY should be close to', () => {
      myCorrelation.computeArrays(myCorrelation.arrayX, myCorrelation.arrayY)
      expect(myCorrelation.computeSum(myCorrelation.arraySqrY)).toBeCloseTo(7604693)
    })

    it('Sum of arrayX should be close to', () => {
      expect(myCorrelation.computeSum(myCorrelation.arrayX)).toBeCloseTo(3828)
    })

    it('Sum of arrayY should be close to', () => {
      expect(myCorrelation.computeSum(myCorrelation.arrayY)).toBeCloseTo(6389)
    })

    it('Compute Correlation', function () {
      expect(myCorrelation.getCorrelation()).toBeCloseTo(0.9544965741)
    })

  })
})
