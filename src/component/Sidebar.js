import { useState } from "react";
const Sidebar = () => {
    
    const [sidebarIsOpen, setSidebarIsOpen] = useState(true)
    const CloseSidebar =()=>{
        setSidebarIsOpen(false)

    }

return (
    <div>
            <div className="sidebar col-5 col-lg-3 mx-4 border fw-bold ms-auto rounded-4">

                <div className="d-flex justify-content-between align-items-center mb-2">
                    <button onClick={CloseSidebar} className="btn btn-sm bg-danger text-light" >x</button>
                </div>
                <ul>
                    <li className="text-danger fw-bold">صفحه نخست</li>
                    <li>بین الملل</li>
                    <li>اقتصادی</li>
                    <li>ورزشی</li>
                    <li>سیاسی</li>
                    <li>اجتماعی</li>
                    <li>فرهنگی</li>
                    <li>انرژی</li>
                    <li>فیلم</li>
                    <li>عکس</li>
                    <li>بازار و آگهی</li>
                    <li>فناوری</li>
                    <li>استثنائها</li>
                </ul>

                <hr />

                <ul className="footer-links">
                    <li>درباره ما</li>
                    <li>تماس با ما</li>
                    <li>خبرنامه</li>
                    <li>پیوندها</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;