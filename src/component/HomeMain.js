import img1 from '../image/HomeMain/top/89730f03ZTp3ZWJwfGY6MjM4OTUwMi5qcGd8ZnVpOjIzNjI3MzZ8bDpmYXx2OjF8dzo1MDg.webp'
import img2 from '../image/HomeMain/daffddb2ZTp3ZWJwfGY6MjM4OTU4MS5qcGVnfGZ1aToyMzYyODEwfGw6ZmF8djoxfHc6MTUw.webp';
import img3 from '../image/HomeMain/3b6e5b1eZTp3ZWJwfGY6MjM4OTE2Ny5qcGd8ZnVpOjIzNjI0NDB8bDpmYXx2OjF8dzoxNTA.webp';
import img4 from '../image/HomeMain/3dd78b13ZTp3ZWJwfGY6MjM4OTQ3NS5qcGd8ZnVpOjIzNjI3MTF8bDpmYXx2OjF8dzoxNTA.webp';
import img5 from '../image/HomeMain/2f7b8a6dZTp3ZWJwfGY6MjM4OTE4OS5qZmlmfGZ1aToyMzYyNDU3fGw6ZmF8djoxfHc6MTUw.webp';
import img6 from '../image/HomeMain/mid/2cbac57bZTp3ZWJwfGY6MjM4OTA5Ni5qcGd8ZnVpOjIzNjIzNzl8bDpmYXx2OjF8dzoxNjE.webp';
import img7 from '../image/HomeMain/mid/6a9760e6ZTp3ZWJwfGY6MjM4OTYyOS5qcGd8ZnVpOjIzNjI4NTF8bDpmYXx2OjF8dzoxNjE.webp';
import img8 from '../image/HomeMain/mid/ae4aeaa4ZTp3ZWJwfGY6MjM4OTE4Mi5qZmlmfGZ1aToyMzYyNDUwfGw6ZmF8djoxfHc6MTYx.webp';




export const HomeMain = () => {
    return (
        <div>
            <div className='card col-7 col-md-12 mx-auto'>
                <img src={img1} />
            </div>
            <div className=' row px-1 mt-2'  style={{fontSize:'15px' }}>
                <div className='col-4 border p-1 px-lg-3 rounded-4'>
                    <img src={img7} className='card-img-top rounded' />
                    <div className='card-body p-1 fw-bold  text-end '><a className='text-decoration-none' href='/'>موضع مذاکراتی ایران تقویت خواهد شد / تحریم‌های بی زمان ترامپ عملی می‌شوند؟</a></div>
                </div>
                <div className=' col-4 border p-1 px-lg-3 rounded-4'>
                    <img src={img6} className='card-img-top rounded' />
                    <div className='card-body p-1 fw-bold  text-end '><a className='text-decoration-none' href='/'>بازی جدید وزارت جهاد با برنج و چای! / ترفند جدید واردکنندگان برای دور زدن سقف‌های دولتی</a></div>
                </div>
                <div className='col-4 border p-1 px-lg-3 rounded-4'>
                    <img src={img8} className='card-img-top rounded' />
                    <div className='card-body p-1 fw-bold  text-end '><a className='text-decoration-none' href='/'>فریب ثبت‌نام در طرح آشیان/ ثبت‌نام کنید اما خانه را فراموش کنید!</a></div>
                </div>
            </div>
            <div className='text-end mt-4'>
                <span className='text-white mb-0 fw-bold bg-primary p-2 px-3 rounded-top-3' style={{fontSize:'13px'}} >اخبار ويژه</span>
                <hr className='border-2 mt-1 border-danger opacity-100' />
                <ul  style={{ fontSize:'15px' }}>
                    <li className='row p-2'>
                        <div className='col p-2 fw-bold text-end'>
                            <a href="" className='text-decoration-none'>دلایل «اقدام تاریخی» آمریکا در حذف سوریه از لیست تروریستی؛ رأی اعتماد واشنگتن به «الشرع»</a>
                            <div className='pt-2 ' style={{ height: '75px', fontSize: '13px' }}>آمریکا سوریه را در اقدامی «تاریخی» از فهرست «حامیان دولتی تروریسم» خارج کرد.</div>
                        </div>
                        <img className='col-4 col-md-5 col-lg-4 col-xl-3 p-1 rounded-4 border' src={img2} style={{ height: '120px' }} />
                    </li>
                    <li className='row p-2'>
                        <div className='col p-2 fw-bold text-end'>
                            <a href="" className='text-decoration-none'>ایران پیروزمندانه از بحران کنونی خارج می‌شود/ بهای سنگینی می‌پردازیم!</a>
                            <div className='pt-2 ' style={{ height: '75px', fontSize: '13px' }}>وزیر پیشین امور خارجه ایران تاکید کرد که ایران با سربلندی از بحران‌های کنونی خارج خواهد شد.</div>
                        </div>
                        <img className='col-4 col-md-5 col-lg-4 col-xl-3  p-1 rounded-4 border' src={img3} style={{ height: '120px' }} />
                    </li>
                    <li className='row p-2'>
                        <div className='col p-2 fw-bold text-end'>
                            <a href="" className='text-decoration-none'>مخالفت صریح مجلس با افزایش قیمت بنزین</a>
                            <div className='pt-2 ' style={{ height: '75px', fontSize: '13px' }}>نماینده مردم دزفول در مجلس شورای اسلامی تاکید کرد که مجلس با افزایش قیمت بنزین در شرایط کنونی مخالف است.</div>
                        </div>
                        <img className='col-4 col-md-5 col-lg-4 col-xl-3  p-1 rounded-4 border' src={img4} style={{ height: '120px' }} />
                    </li>
                    <li className='row p-2'>
                        <div className='col p-2 fw-bold text-end'>
                            <a href="" className='text-decoration-none'>آقای پزشکیان، برای وزیرتان نهج‌البلاغه بخوانید؛ یادش بیاید امانت‌دار مردم است، نه سهام‌دار بنگاه‌ها</a>
                            <div className='pt-2 ' style={{ height: '75px', fontSize: '13px' }}>احمد میدری با وعده رفاه و حمایت از محرومان، وزارت کار را تحویل گرفت؛ اما در عمل، بنگاه‌داری و جابه‌جایی مدیران به اولویت نخست تبدیل شد.</div>
                        </div>
                        <img className='col-4 col-md-5 col-lg-4 col-xl-3  p-1 rounded-4 border' src={img5} style={{ height: '120px' }} />
                    </li>
                </ul>
            </div>
        </div>
    )
}