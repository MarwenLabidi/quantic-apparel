import "../styles/globals.css";
import { app } from "../styles/_app.module.css";

import SideBar from "../components/sideBar/index";

export default function App({ Component, pageProps }) {
        return (
                <div className={app}>
                        <SideBar />
                        <Component {...pageProps} />
                </div>
        );
}
