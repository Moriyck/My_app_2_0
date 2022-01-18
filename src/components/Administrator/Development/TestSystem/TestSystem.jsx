import React from 'react'
import AllTestsInTurn from './AllTestsInTurn'

const TestSystem = (props) => {
    debugger
    let tests = props.developmentSvimPage.tests
    let countElementsObj = tests.length


    let onetest = tests.map((as, index) =>
        <div>
          <AllTestsInTurn/>
        </div>
    )
    let scopeOfAllTests = countElementsObj / countElementsObj * 100
    let allTests = scopeOfAllTests
    let textTest = 10

    if (allTests < 100) {
        props.getTest(allTests, nameTest)
    }

    let testSystems = allTests > 100 ? 'System tests: ' + allTests + '%' + countElementsObj : <div><PreloaderContainer /></div>
    let allSystems = allTests > 100 ? 'The test is completed: ' + allTests + '%' : 'Test systems: ' + allTests + '%'

    return (
        <div >
            <p /> {onetest}
            <p /> {testSystems}
            <p /> {allSystems}
        </div>
    )
}

export default TestSystem