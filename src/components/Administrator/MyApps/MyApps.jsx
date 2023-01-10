import React from 'react'
import AllApps from './AllApps'
import TestStandConainer from './TestStand/TestStandConainer'
import classes from './Apps.module.css'

const MyApps = (props) => {
  
  let all_apps = [
    {
      "_id": "12cf9d9c306bd6fb8fdcbcb54b00d5e7",
      "_rev": "4-613b09e2f769743ce1def4343b4f49da",
      "name": "Test stand",
      "to": "/testStand",
      "routPath": "/app/:appId?"
    },
    {
      "_id": "12cf9d9c306bd6fb8fdcbcb54b00fe3f",
      "_rev": "3-2107f79f06c99b554977de9833274760",
      "name": "https://easyeda.com",
      "to": "/easyeda",
      "routPath": "/app/:appId?"
    },
    {
      "_id": "12cf9d9c306bd6fb8fdcbcb54b016e35",
      "_rev": "5-6240861bd9fd28f15977a2aaa6e903bd",
      "name": " https://miro.com/app/dashboard/",
      "to": "/miro",
      "routPath": "/app/:appId?"
    }
  ]

  let allAppp = all_apps.map(aa => <AllApps
    id={aa._id}
    name={aa.name}
    to={aa.to}
    routPath={aa.routPath}
  />)

  return (
    <div>
       <div>
        <TestStandConainer />
      </div>
      <div className={classes.avatar}>
        {allAppp}
      </div>
    </div>
  )
}

export default MyApps