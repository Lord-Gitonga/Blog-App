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
                      <img src={Delete} alt="name" />
                  </div>

              </div>
              <h1>Lemon</h1>
              <p>
                  Lemons are a rich source of vitamin C, providing over 100% of the recommended daily intake in just one medium-sized fruit. Vitamin C is an essential nutrient that supports the immune system, promotes skin health, and acts as an antioxidant in the body.

                In addition to vitamin C, lemons contain various other vitamins and minerals, including vitamin B6, potassium, and folate. They also contain dietary fiber, although it is mostly found in the pulp rather than the juice.
                  <br /><br />
                  Lemons are widely used in culinary applications, adding a tangy and acidic flavor to dishes and beverages. They are often used as a flavoring agent in cooking, baking, and salad dressings. Lemon juice is also popularly used to make lemonade, a refreshing and thirst-quenching drink.
              </p>
          </div>
          <Menu/>
    </div>
  )
}

export default Single
