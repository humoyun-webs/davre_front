// import React from 'react';
// import "./style.scss"
// import  {NavLink}  from 'react-router-dom';    

// const index = () => {
//     return (
//         <div className='all'>
//               <div className='navbar1'>
//       <ul>
//         <li >
//           <NavLink to="/" className='button-rounded'>Table</NavLink>
//         </li>
//         <li>
//           <NavLink to="/menu2" className='button-rounded'>Table2</NavLink>
//         </li>
//       </ul>
//     </div>
//         </div>
//     );
// };

// export default index;




import { Tabs } from 'flowbite-react';
import "./style.scss"
import Search from "../search"
 
import  {NavLink}  from 'react-router-dom';  

export default function DefaultTabs() {
 
  return (
    <div className="menu">
    <div className='container'>
  {/* Hello world */}
  {/* Tabs navs */}
  <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
    <li className="nav-item" role="presentation">
      <a
        className="nav-link active"
        id="ex1-tab-1"
        data-mdb-toggle="tab"
        href="#ex1-tabs-1"
        role="tab"
        aria-controls="ex1-tabs-1"
        aria-selected="true"
      >
        Tab 1
      </a>
    </li>
    <li className="nav-item" role="presentation">
      <a
        className="nav-link"
        id="ex1-tab-2"
        data-mdb-toggle="tab"
        href="#ex1-tabs-2"
        role="tab"
        aria-controls="ex1-tabs-2"
        aria-selected="false"
      >
        Tab 2
      </a>
    </li>
    
  </ul>
  {/* Tabs navs */}
  {/* Tabs content */}
  <div className="tab-content" id="ex1-content">
    <div
      className="tab-pane fade show active"
      id="ex1-tabs-1"
      role="tabpanel"
      aria-labelledby="ex1-tab-1"
    >
     <div className="table">
        <div className="container">
          <Search />
          <h1 className="text-center">Hello</h1>/

          <hr />
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Hello</th>
                <th>Hello </th>
                <th>Hello</th>
                <th>Hello </th> 
                <th>Hello</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    <div
      className="tab-pane fade"
      id="ex1-tabs-2"
      role="tabpanel"
      aria-labelledby="ex1-tab-2"
    >
        <div className="table">
        <div className="container">
          <Search />
          <h1 className="text-center">Hello</h1>/

          <hr />
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Hello</th>
                <th>Hello </th>
                <th>Hello</th>
                <th>Hello </th> 
                <th>Hello</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  
  </div>
 
  </div>

  )
}


