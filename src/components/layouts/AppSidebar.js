import React from 'react'
import { Link } from 'react-router-dom';

const AppSidebar = () => {
  return (
    <div className="side-bar"> 
        <aside className="main-sidebar">
          <section className="sidebar">
            <div className="user-panel">
              <div className="pull-left image">
                <img src="https://www.gravatar.com/avatar/a626aece6da9e7faaf7b36de12133347" className="img-circle" alt="User Image" />
              </div>
              <div className="pull-left info">
                <p>Alexander Pierce</p>
                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
              </div>
            </div>
            <form action="#" method="get" className="sidebar-form">
              <div className="input-group">
                <input type="text" name="q" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                      <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
              </div>
            </form>
            <ul className="sidebar-menu" data-widget="tree">
              <li className="header">MAIN NAVIGATION</li>
              <li className="active">
                <Link to="/">
                  <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                </Link>
              </li>
              <li className="treeview">
                <a href="#">
                  <i className="fa fa-folder"></i> <span>Documents Management</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><Link to="/documents/create"><i className="fa fa-book"></i> เพิ่มเอกสารใหม่</Link></li>
                  <li><Link to="/documents/search"><i className="fa fa-search"></i> ค้นหาเอกสาร</Link></li>
                </ul>
              </li>
              <li><a href="https://adminlte.io/docs"><i className="fa fa-book"></i> <span>คู่มือการใช้งาน</span></a></li>
            </ul>
          </section>
      </aside>
    </div>
  )
}

export default AppSidebar
