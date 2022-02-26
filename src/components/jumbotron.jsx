import Avatar from './avatar';
import Navbar from './navbar';
import Card from './card';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {BiCurrentLocation, BiMailSend, BiPhoneCall} from 'react-icons/bi'
import Contact from './contact';
const jumbotron = ()=>{
    return(
        <>
            <Navbar/>
            <div class="w-screen h-screen table font-nexa background relative" id="jumbotron">
                <div className='table-cell align-bottom w-full'>
                    <div class=" mx-auto h-full relative mt-10">
                        <div className='h-full w-full relative table align-middle'>
                            <div className='text-white pt-44 text-center mx-auto top-1/4 w-full z-40 absolute table-cell'>
                                <span className='font-bold text-7xl'>RAIHAN RAHMAN</span><br/>
                                <span className='text-md font-bold'>Backend Developer</span><br/><br/>
                                <div className="mt-4">
                                    <a href="" className='bg-slate-800 px-8 py-2 text-orange-400 text-xl font-bold'>Linkedin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-screen bg-white table font-nexa">
                <div className='container mx-auto my-32 text-slate-800 grid grid-cols-2'>
                    <div className="w-2/3 text-right mr-28">
                        <img src={'./images/avatar.jpg'}/>
                    </div>
                    <div className="pt-12">
                        <div className='text-4xl font-bold underline decoration-orange-400 underline-offset-8 mb-4'>
                            About Me
                        </div>
                        <div>
                            <p>My name is Raihan Rahman. I am a Web Developer, and I'm very passionate and dedicated to my work.</p><br/>
                            <p>
                                With 3 years experience as a professional Web developer, I have acquired the skills and knowledge
                                to make successful project. I enjoy analysis and implementation process.
                            </p>
                            <br/>
                            <button className="bg-slate-800 text-orange-400 px-4 py-2 font-bold">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="w-screen bg-slate-100 table font-nexa">
                <div className='container mx-auto my-32 text-slate-800'>
                    <div className='text-4xl font-bold underline decoration-orange-400 underline-offset-8'>
                        Technology
                    </div>
                    <div class="mx-auto my-32">
                        <Swiper 
                            spaceBetween={2}
                            slidesPerView={5}
                            onSlideChange={()=> console.log('slide change')}
                            onSwiper={swiper => console.log(swiper)}
                        >
                            <SwiperSlide><Card title="React Js" image="./images/react.svg"/></SwiperSlide>
                            <SwiperSlide><Card title="Node Js" image="./images/nodejs.png"/></SwiperSlide>
                            <SwiperSlide><Card title="Javascript" image="./images/JavaScript.png"/></SwiperSlide>
                            <SwiperSlide><Card title="Express Js" image="./images/express.png"/></SwiperSlide>
                            <SwiperSlide><Card title="Docker" image="./images/docker.png"/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className='container mx-auto my-32'>
                    <div className='text-4xl font-bold underline decoration-orange-400 underline-offset-8 text-center'>
                        Portofolio
                    </div>
                    <div className='grid grid-cols-3'>
                        <div className='w-full'>

                        </div>
                    </div>
                </div>
            </div> 
            <div className='bg-white'>
                <div className='container mx-auto my-32'>
                    <div className='text-4xl font-bold underline decoration-orange-400 underline-offset-8 text-center'>
                        Contact Me
                    </div>
                    <div className='grid grid-cols-3 mt-24'>
                        <Contact icon={<BiCurrentLocation/>} title="Address" text="Jl Damanhuri 2, Samarinda"/>
                        <Contact icon={<BiPhoneCall/>} title="Phone" text="+62 858-2256-7649"/>
                        <Contact icon={<BiMailSend/>} title="Email" text="raihanr090@gmail.com"/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default jumbotron