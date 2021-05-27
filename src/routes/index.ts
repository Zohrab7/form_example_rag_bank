import {dashboardNav} from "../const";
import UserPage from "../pages/UserPage";
import TransactionPage from "../pages/TransactionPage";
import TerminalPage from "../pages/TerminalPage";

const dashboardRouts = [
    {
        key: 0,
        exact: true,
        path: dashboardNav.user,
        component: UserPage
    },
    {
        key: 1,
        exact: true,
        path: dashboardNav.transaction,
        component: TransactionPage
    },
    {
        key: 2,
        exact: true,
        path: dashboardNav.terminal,
        component: TerminalPage
    },

];

export default dashboardRouts;
