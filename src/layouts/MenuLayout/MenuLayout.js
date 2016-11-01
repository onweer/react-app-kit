import React, { Component } from 'react'
import { Menu, Breadcrumb, Icon } from 'antd';
import { IndexLink, Link } from 'react-router'
const SubMenu = Menu.SubMenu;

import './MenuLayout.scss'
class MenuLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse: false,
    }
    this.onCollapseChange = this.onCollapseChange.bind(this)
  }
  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  }
  render() {
    const collapse = this.state.collapse
    const children = this.props.children
    return (
      <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo">Logo</div>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
            <Menu.Item key="index">
              <Icon type="user" />
              <IndexLink to='/'>
                <span className="nav-text">IndexLink</span>
              </IndexLink>
            </Menu.Item>
            <Menu.Item key="setting">
              <Icon type="setting" />
              <Link to='/counter'>
                <span className="nav-text">counter</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="laptop">
              <Icon type="laptop" />
              <Link to='/example'>
                <span className="nav-text">nav 3</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="notification">
              <Icon type="notification" />
              <Link to='/example'>
                <span className="nav-text">nav 4</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="folder">
              <Icon type="folder" />
              <Link to='/example'>
                <span className="nav-text">nav 5</span>
              </Link>
            </Menu.Item>
          </Menu>
          <div className="ant-aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>

        <div className="ant-layout-main">
          <div className="ant-layout-header">Header</div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>IndexLink</Breadcrumb.Item>
              <Breadcrumb.Item>Applications</Breadcrumb.Item>
              <Breadcrumb.Item>Counter</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: '100%' }}>
                {children}
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default MenuLayout
