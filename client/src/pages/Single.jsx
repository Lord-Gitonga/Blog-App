import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
function Single() {
  return (
      <div className="single">
          <div className="content">
              <img src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="name" />
              <div className="user">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="name" />
                  <div className="info">
                      <span>Morris</span>
                      <p>Posted 2 days ago</p>
                  </div>
                  <div className="edit">
                      <Link to={`/write?edit=2`}>
                          <img src={Edit} alt="name" />
                        </Link>
                      <img src={Delete} alt="name"/>
                  </div>

              </div>
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil at ad mollitia laboriosam quia earum voluptate nesciunt. Laudantium, incidunt fugit reiciendis doloribus totam eveniet repellendus quae ea deleniti labore.
                  <br /><br />
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, aut quibusdam recusandae sapiente adipisci nesciunt sunt harum numquam fugiat laboriosam praesentium eligendi saepe. Error consequatur corrupti debitis, sapiente sit hic!
              </p>
          </div>
          <Menu/>
    </div>
  )
}

export default Single
