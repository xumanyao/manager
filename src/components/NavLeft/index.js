import React from 'react'

import {Menu} from 'antd';
import MenuList from '../../config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu;


export default class NavLeft extends React.Component {
    constructor(props) {
        super(props);
        const menuTreeNode = this.renderMenu(MenuList);
        this.state = {
            menuTreeNode
        }
    }

    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (<SubMenu key={item.key} title={item.title}>
                    {this.renderMenu(item.children)}
                </SubMenu>)
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        })
    }

    render() {
        return (
            <div>
                <div className='logo'>
                    <img src="assets/huahua.svg" alt='img'/>
                    <h1>HuaHua MS</h1>
                </div>
                <div>
                    <Menu theme='dark'>
                        {this.state.menuTreeNode}
                    </Menu>
                </div>
            </div>
        )
    }
}