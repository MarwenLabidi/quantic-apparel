import {sideBar,logo,menu,overview}from "./index.module.css"
import Image from 'next/image'


const SideBar = () => {
        return <div className={sideBar}>
                <Image className={logo} src="/LOGO.png" alt="Picture of the author" width={255} height={50} />
                <main className={menu}>
                        <section  className={overview} >
                        </section>
                </main>
        </div>
};

export default SideBar;
