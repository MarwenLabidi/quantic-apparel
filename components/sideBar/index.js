import {
        sideBar,
        logo,
        menu,
        overview,
        pages,
        charts,
        map,
        button,
        title,
} from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
        return (
                <div className={sideBar}>
                        <Image
                                className={logo}
                                src='/LOGO.png'
                                alt='Picture of the author'
                                width={210}
                                height={38}
                        />
                        <main className={menu}>
                        
                                <section className={pages}>
                                        <p className={title}>Pages</p>
                                        <Link style={{ textDecoration: "none" }} href='/'>
                                                <button className={button}>
                                                        Remarkable trees
                                                </button>
                                        </Link>
                                </section>
                                <section className={charts}>
                                        <p className={title}>Charts</p>
                                        <Link style={{ textDecoration: "none" }} href='/Charts/BarGraph'>
                                                <button className={button}>
                                                        Bar Graph
                                                </button>
                                        </Link>
                                        <Link style={{ textDecoration: "none" }} href='/Charts/PiesChart'>
                                                <button className={button}>
                                                        Pie Chart
                                                </button>
                                        </Link>
                                        <Link style={{ textDecoration: "none" }} href='/Charts/Scatterplot'>
                                                <button className={button}>
                                                        Scatterplot
                                                </button>
                                        </Link>
                                </section>
                                <section className={map}>
                                        <p className={title}>Map</p>
                                        <Link style={{ textDecoration: "none" }} href='/Map'><button className={button}>Map</button></Link>
                                </section>
                        </main>
                </div>
        );
};

export default SideBar;
