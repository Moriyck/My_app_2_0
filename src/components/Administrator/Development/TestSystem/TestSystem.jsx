import React from 'react'
import PreloaderContainer from '../../../../common/preloader/PreloaderContainer'
import AllTestsInTurn from './AllTestsInTurn'

const TestSystem = (props) => {

    let tests = props.developmentSvimPage.tests
    let countElementsObj = tests.length

    let onetest = tests.map((as, index) =>
        <div>
            <AllTestsInTurn />
        </div>
    )
    let scopeOfAllTests = countElementsObj / countElementsObj * 100
    let allTests = scopeOfAllTests
    let textTest = 10
    let nameTest = 1

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