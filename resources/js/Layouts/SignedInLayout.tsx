import {
    faArrowRightFromBracket,
    faBars,
    faGamepad,
    faGear,
    faListCheck,
    faUsersLine,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const SignedInLayout = ({ children }: Props) => {
    return (
        <>
            <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <aside
                id="default-sidebar"
                className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r-2 border-r-gray-600 transition-transform sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li className="side-menu-option">
                            <Link
                                href={route('myBacklog')}
                                className="side-menu-option-link group"
                            >
                                <FontAwesomeIcon
                                    icon={faListCheck}
                                    className={'side-menu-option-icon'}
                                />
                                <span className="side-menu-option-label">
                                    Backlog
                                </span>
                            </Link>
                        </li>
                        <li className="side-menu-option">
                            <Link
                                href={route('games.details', { game: 1 })}
                                className="side-menu-option-link group"
                            >
                                <FontAwesomeIcon
                                    icon={faGamepad}
                                    className={'side-menu-option-icon'}
                                />
                                <span className="side-menu-option-label">
                                    Discover
                                </span>
                                {/*<span*/}
                                {/*    className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"*/}
                                {/*>*/}
                                {/*    Pro*/}
                                {/*</span>*/}
                            </Link>
                        </li>
                        <li className="side-menu-option">
                            <a href="#" className="side-menu-option-link group">
                                <FontAwesomeIcon
                                    icon={faUsersLine}
                                    className={'side-menu-option-icon'}
                                />
                                <span className="side-menu-option-label">
                                    Gamers
                                </span>
                            </a>
                        </li>
                        <li className="side-menu-option">
                            <a href="#" className="side-menu-option-link group">
                                <FontAwesomeIcon icon={faGear} />
                                <span className="side-menu-option-label">
                                    Settings
                                </span>
                            </a>
                        </li>
                        <li className="side-menu-option">
                            <Link
                                href={route('logout')}
                                method={'post'}
                                className="side-menu-option-link group"
                            >
                                <FontAwesomeIcon
                                    icon={faArrowRightFromBracket}
                                />
                                <span className="side-menu-option-label">
                                    Logout
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="h-full bg-gray-900 px-12 py-6 sm:ml-64">
                {children}
            </div>
        </>
    );
};

export default SignedInLayout;
