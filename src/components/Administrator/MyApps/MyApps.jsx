import React from 'react'
import AllApps from './AllApps'
import Application from './Application'

import classes from './Apps.module.css'

const MyApps = (props) => {
  
  let all_apps = [
    {
      "_id": "12cf9d9c306bd6fb8fdcbcb54b00d5e7",
      "_rev": "4-613b09e2f769743ce1def4343b4f49da",
      "name": "Test stand",
      "to": "/testStand",
      "routPath": "/app/:appId?",
      "img": "http://localhost:5984/all_apps/12cf9d9c306bd6fb8fdcbcb54b00d5e7/img_10636.png"
    },
    {
      "_id": "12cf9d9c306bd6fb8fdcbcb54b00fe3f",
      "_rev": "3-2107f79f06c99b554977de9833274760",
      "name": "https://easyeda.com",
      "to": "/easyeda",
      "routPath": "/app/:appId?",
      "img": ""
    },
    {
      "_id": "12cf9d9c306bd6fb8fdcbcb54b016e35",
      "_rev": "5-6240861bd9fd28f15977a2aaa6e903bd",
      "name": " https://miro.com/app/dashboard/",
      "to": "/miro",
      "routPath": "/app/:appId?",
      "img": ""
    },
    {
      "_id": "12cf9d9c306bd6fb8fdcbcb54b0226b0",
      "_rev": "1-15b8793de45e4901cd58bb789b49d921",
      "name": "github",
      "to": "/github",
      "img": "http://localhost:5984/all_apps/12cf9d9c306bd6fb8fdcbcb54b0226b0/Github.png"
    },
    {
      "_id": "12cf9d9c306bd6fb8fdcbcb54b0226b0",
      "_rev": "1-15b8793de45e4901cd58bb789b49d921",
      "name": "github.com/Moriyck",
      "img": ""
    },
    {
      "_id": "12cf9d9c306bd6fb8fdcbcb54b0226b0",
      "_rev": "1-15b8793de45e4901cd58bb789b49d921",
      "name": "github.com/Moriyck",
      "img": ""
    },
    {
      "_id": "12cf9d9c306bd6fb8fdcbcb54b0226b0",
      "_rev": "1-15b8793de45e4901cd58bb789b49d921",
      "name": "github.com/Moriyck",
      "img": ""
    },
    {
      "name": " My assets",
      "img": ""
    },
    {
      "name": "Accounting",
      "img": ""
    },
    {
      "name": "Planning",
      "img": ""
    },
    {
      "name": "Development",
      "img": ""
    },
    {
      "name": "EAM",
      "img": ""
    },
    {
      "name": "CRM",
      "img": ""
    }
  ]

    let allAppp = all_apps.map(aa => <AllApps
    id={aa._id}
    name={aa.name}
    to={aa.to}
    routPath={aa.routPath}
    img={aa.img}
  />)
  if (props.location.pathname == "/myApps") {
    return (
      <div className={classes.fourColumns}>
        {allAppp}
      </div>
    )
  }
  else {
    return (
      <div>
        <Application />
      </div>
    )
  }
}

export default MyApps