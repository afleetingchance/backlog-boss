import React, {ReactNode} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRightFromBracket,
    faBars,
    faGamepad,
    faGear,
    faListCheck,
    faUsersLine
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "@inertiajs/react";

type Props = {
    children: ReactNode
}

const SignedInLayout = ({children}: Props) => {
    return (
        <>
            <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <aside
                id="default-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
               aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li className="side-menu-option">
                            <a href="#" className="group side-menu-option-link">
                                <FontAwesomeIcon icon={faListCheck} className={'side-menu-option-icon'}/>
                                <span className="side-menu-option-label">Backlog</span>
                            </a>
                        </li>
                        <li className="side-menu-option">
                            <a href="#" className="group side-menu-option-link">
                                <FontAwesomeIcon icon={faGamepad} className={'side-menu-option-icon'} />
                                <span className="side-menu-option-label">Discover</span>
                                {/*<span*/}
                                {/*    className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"*/}
                                {/*>*/}
                                {/*    Pro*/}
                                {/*</span>*/}
                            </a>
                        </li>
                        <li className="side-menu-option">
                            <a href="#" className="group side-menu-option-link">
                                <FontAwesomeIcon icon={faUsersLine} className={'side-menu-option-icon'} />
                                <span className="side-menu-option-label">Gamers</span>
                            </a>
                        </li>
                        <li className="side-menu-option">
                            <a href="#" className="group side-menu-option-link">
                                <FontAwesomeIcon icon={faGear} />
                                <span className="side-menu-option-label">Settings</span>
                            </a>
                        </li>
                        <li className="side-menu-option">
                            <Link href={route('logout')} method={'post'} className="group side-menu-option-link">
                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                <span className="side-menu-option-label">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-2 sm:ml-64">
                {children}
            </div>
        </>
    );
}

export default SignedInLayout
