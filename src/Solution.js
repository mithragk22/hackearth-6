import React from 'react'
import Collaborative from './Collaborative.PNG';
import addons from './addons.png'

const Solution = () => {
  return (
    <div><img src={Collaborative} alt="collaborative"></img>
    <div className='soln'>
    <ul>
    <li> Most of the files/documents we are sharing within organisation to our colleagues.
    </li> 
    <li>Whenever collaboration is required between teams or departments or division within our organization, always use respective document’s Confluence or SharePoint/OneDrive/Teams-Channel-Files links so that versions of the file can be maintained, duplicates of the files can be avoided, and further, we can securely share the files.
    </li>
    </ul>
    </div>
    <img src={addons} alt="addons"></img>
    </div>
  )
}

export default Solution