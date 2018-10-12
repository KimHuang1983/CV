var { createServer } = require('http')
var { readFile } = require('fs')
const correlationFile = require('./correlationNode.js')
const regressionFile = require('./regressionNode.js')

let myCorrelation = new correlationFile.Correlation()
let myRegression = new regressionFile.Regression()
let correlationOutput = String()
let regressionOutput = String()
let server = createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })

    //scripts
    let fileNameArray = request.url.replace("/", "").split(",");
    let fileOneRead = false, fileTwoRead = false
    //setting readFile constant variable
    var readInputFiles = fs.readFile(fileNameArray, 'utf-8', (err, data) => {
        if (err) throw error
        if (fileNameArray.length === 2) {
            let dataArrayX = ''
            let dataArrayY = ''
            for (const [i, value] of fileNameArray.entries()) {
                readMyFile(value, i)
            }

            const readMyFile = (fileName, type) => {
                var readX = fs.readFile(fileName, 'utf-8', function (err, data) {
                    if (err)
                        return console.error(err)

                    if (type === 0) {
                        dataX = data
                        fileOneRead = true
                    } else {
                        dataY = data
                        fileTwoRead = true
                    }
                    //computeFunction()
                })
            }
            const computeFunction = () => {

                if (fileOneRead && fileTwoRead) {

                    myCorrelation.setArray(dataArrayX, true)
                    myCorrelation.setArray(dataArrayY, false)

                    myRegression.setArray(dataArrayX, true)
                    myRegression.setArray(dataArrayY, false)

                    correlationOutput = myCorrelation.getCorrelation()
                    regressionOutput = myRegression.getRegression()

                    let obj = {
                        correlation: correlationOutput,
                        regression: regressionOutput
                    }
                    let myJSON = JSON.stringify(obj);
                    response.write(myJSON)
                    response.end()
                }
            }
        }
    })
    server.listen(8000)