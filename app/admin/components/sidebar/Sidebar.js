'use client'
import Link from 'next/link';
import { FaBook, FaCalendar, FaShoppingCart } from 'react-icons/fa'; // Using FontAwesome icons
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';


export default function DashboardSidebar() {
    return (
        <Sidebar>
            <Menu
                menuItemStyles={{
                    button: {
                        [`&.active`]: {
                            backgroundColor: '#13395e',
                            color: '#b6c8d9',
                        },
                    },
                }}
            >
                {/* Documentation Link with Icon */}
                <MenuItem icon={<FaBook />} component={<Link href="/documentation" passHref><a>Documentation</a></Link>} />

                {/* Calendar Link with Icon */}
                <MenuItem icon={<FaCalendar />} component={<Link href="/calendar" passHref><a>Calendar</a></Link>} />

                {/* E-commerce Link with Icon */}
                <MenuItem icon={<FaShoppingCart />} component={<Link href="/e-commerce" passHref><a>E-commerce</a></Link>} />
            </Menu>
        </Sidebar>
    );
}
