import {sideBar,logo,menu,overview,pages,charts,map,button,title}from "./index.module.css"
import Image from 'next/image'


const SideBar = () => {
        return <div className={sideBar}>
                <Image className={logo} src="/LOGO.png" alt="Picture of the author" width={255} height={40} />
                <main className={menu}>
                        <section  className={overview} >
                                <p className={title}>Menu</p>
                                <button className={button}>Overview</button>
                        </section>
                        <section  className={pages} >
                                <p className={title}>Pages</p>
                                <button className={button}>Remarkable trees</button>
                        </section>
                        <section  className={charts} >
                                <p className={title}>Charts</p>
                                <button className={button}>Bar Graph</button>
                                <button className={button}>Pie Chart</button>
                                <button className={button}>Scatterplot</button>

                        </section>
                        <section  className={map} >
                                <p className={title}>Map</p>
                                <button className={button}>Map</button>
                        </section>
                </main>
        </div>
};

export default SideBar;
