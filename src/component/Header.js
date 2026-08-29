import { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
    return (
        <header className="header sticky-top">
            {/* نوار بالا یا منو*/}
            <div className="top-bar ">
                <div className="logo">
                    <span className="logo-text">TBNK</span>
                    <span className="logo-sub d-none d-sm-block">پایگاه خبری تحلیلی تابناک</span>
                </div>
                <nav className="main-nav">
                    <a href="/political">سیاسی</a>
                    <a href="/economic">اقتصادی</a>
                    <a href="/sports">ورزشی</a>
                    <a href="/video">فیلم</a>
                    <a href="/notes">یادداشت</a>
                    <a>
                        <button className="btn btn-sm btn-light p-1 text-danger fw-bold" href="/">صفحه نخست</button>
                    </a>
                </nav>
            </div>
        {/* نوار پایین */}
            <div className="bottom-bar d-none d-md-flex " style={{direction:'rtl'}}>
                <a href="/bank">منابع مالی بانک ملی ایران از ۲۵۰۰ همت گذشت</a>
                <a href="/war">آینده جنگ ایران و آمریکا؛ جنگ می‌شود یا توافق؟</a>
                <a href="/anger">سه بار عصبانیت آقای را دیدیم</a>
                <a href="/economic-war">برگ برنده ایران در جنگ اقتصادی</a>
            </div>
        </header>

    );
}
export default Header;