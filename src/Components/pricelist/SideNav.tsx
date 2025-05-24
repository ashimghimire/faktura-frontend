
import "./navigation.css"

const SideNav = () => {
    const navItems = [
        {
            name: 'Customers',
            url: '/customers',
            icon: '👥'
        },
        {
            name: 'My Business',
            url: '/my-business',
            icon: '🏢'
        },
        {
            name: 'Invoice',
            url: '/invoice',
            icon: '📄'
        },
        {
            name: 'Journal',
            url: '/journal',
            icon: '📔'
        },
        {
            name: 'Pricelist',
            url: '/pricelist',
            icon: '💰'
        },
        {
            name: 'Multiple Invoicing',
            url: '/multiple-invoicing',
            icon: '📑'
        },
        {
            name: 'Unpaid Invoices',
            url: '/unpaid-invoices',
            icon: '⚠️'
        },
        {
            name: 'Offer',
            url: '/offer',
            icon: '🎯'
        },
        {
            name: 'Inventory Control',
            url: '/inventory',
            icon: '📦'
        },
        {
            name: 'Member Invoicing',
            url: '/member-invoicing',
            icon: '👤'
        },
        {
            name: 'Import/Export',
            url: '/import-export',
            icon: '🔄'
        },
        {
            name: 'Logout',
            url: '/logout',
            icon: '🚪'
        }
    ]

    return (
        <div className="sidenav">
            <div className="header">
                Menu
            </div>
            <div className="list">
                {navItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="list-item"
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="p">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideNav
