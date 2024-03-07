// 创建图标菜单项对象
class MenuItem {
    constructor(icon, tooltip) {
        this.icon = icon;
        this.tooltip = tooltip;
    }

    render() {
        const item = document.createElement('div');
        item.classList.add('menu-item');
        
        // 创建图标
        const icon = document.createElement('i');
        icon.classList.add('icon', this.icon);
        item.appendChild(icon);

        // 创建Tooltip提示框
        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        tooltip.textContent = this.tooltip;
        item.appendChild(tooltip);

        return item;
    }
}

// 创建菜单对象
class Menu {
    constructor(containerId, items) {
        this.container = document.getElementById(containerId);
        this.items = items;
    }

    render() {
        this.items.forEach(item => {
            const menuItem = item.render();
            this.container.appendChild(menuItem);
        });
    }
}

// 初始化菜单
const menuItems = [
    new MenuItem('icon-home', 'Home'),
    new MenuItem('icon-about', 'About'),
    new MenuItem('icon-contact', 'Contact')
];

const menu = new Menu('menu-container', menuItems);
menu.render();
