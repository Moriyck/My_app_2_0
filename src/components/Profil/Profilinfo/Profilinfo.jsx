import React from 'react'
import classes from './Profilinfo.module.css'

const Profilinfo = (props) => {
  return (
    <div className={classes.profilinfo}>
      <div >
        <img src='https://avatars.mds.yandex.net/get-pdb/216365/95f3b47e-11c4-4e31-a28f-9e2d67412b1b/s1200'></img>
      </div>
      <div className={classes.avatar}>
        <div>
          Avatar
        </div>
        <div>
          <img src='https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo'></img>
        </div>
        <div>
          discripchon
        </div>
      </div>
    </div>
  )
}

export default Profilinfo;