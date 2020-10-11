import React , {Component} from 'react';
import classes from './HomePage.module.css';
import audio from '../pic/audio.jpg';
import bags from "../../components/imges/bags.jpg";
import camera from "../../components/imges/cameras1.jpg";
import computers from '../../components/imges/computers.jpg';
import  lenses from '../../components/imges/lenses.jpg'
import  scopes from '../../components/imges/scopes.jpg'
import  tripods from '../../components/imges/tripods.jpg'
import tv from '../../components/imges/tv.jpg';
import video from '../../components/imges/video.jpg';
import light from '../../components/imges/lighting.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';
import MyImage from './MyImage';



export default class HomePage extends Component{



    render(){

        const images = [
            {src:audio,
            name:"Audio",
            price:'175$',
            info:[
                {"data" : "24.2MP BSI full-frame image sensor"},
                {"data" :"High-speed BIONZ X processing-engine"},
                {"data" : "Up to 10 fps with AF/AE tracking"},
                {"data" : "4K full-frame HDR Movie with full pixel readout"},
                {"data" : "3-inch 922K-dot LCD touch screen"}
        ],
        MFR:"ILCE7M3K/B",
        FC: "ILCE7M3KB"
        },
            {src:bags,
                name:"Bags",
                price:'170$',
                info:[
                    {"data" : "24.2MP BSI full-frame image sensor"},
                    {"data" :"High-speed BIONZ X processing-engine"},
                    {"data" : "Up to 10 fps with AF/AE tracking"},
                    {"data" : "4K full-frame HDR Movie with full pixel readout"},
                    {"data" : "3-inch 922K-dot LCD touch screen"}
            ],
            MFR:"ILCE7M3K/B",
            FC: "ILCE7M3KB"},
            {src: camera,
                name:"Camera",
                price:'255$',
                info:[
                    {"data" : "24.2MP BSI full-frame image sensor"},
                    {"data" :"High-speed BIONZ X processing-engine"},
                    {"data" : "Up to 10 fps with AF/AE tracking"},
                    {"data" : "4K full-frame HDR Movie with full pixel readout"},
                    {"data" : "3-inch 922K-dot LCD touch screen"}
            ],
            MFR:"ILCE7M3K/B",
            FC: "ILCE7M3KB"},
            {src:computers ,
                name:"Computers",
                price:'1000$',
                info:[
                    {"data" : "24.2MP BSI full-frame image sensor"},
                    {"data" :"High-speed BIONZ X processing-engine"},
                    {"data" : "Up to 10 fps with AF/AE tracking"},
                    {"data" : "4K full-frame HDR Movie with full pixel readout"},
                    {"data" : "3-inch 922K-dot LCD touch screen"}
            ],
            MFR:"ILCE7M3K/B",
            FC: "ILCE7M3KB"},
            {src:lenses,
                name:"Lenses",
                price:'125$',
                info:[
                    {"data" : "24.2MP BSI full-frame image sensor"},
                    {"data" :"High-speed BIONZ X processing-engine"},
                    {"data" : "Up to 10 fps with AF/AE tracking"},
                    {"data" : "4K full-frame HDR Movie with full pixel readout"},
                    {"data" : "3-inch 922K-dot LCD touch screen"}
            ],
            MFR:"ILCE7M3K/B",
            FC: "ILCE7M3KB"},
            {src: scopes,
                name:"Scopes",
                price:'123$',
                info:[
                    {"data" : "24.2MP BSI full-frame image sensor"},
                    {"data" :"High-speed BIONZ X processing-engine"},
                    {"data" : "Up to 10 fps with AF/AE tracking"},
                    {"data" : "4K full-frame HDR Movie with full pixel readout"},
                    {"data" : "3-inch 922K-dot LCD touch screen"}
            ],
            MFR:"ILCE7M3K/B",
            FC: "ILCE7M3KB"},
            {src:tripods,
                name:"tripods",
                price:'175$',
                info:[
                    {"data" : "24.2MP BSI full-frame image sensor"},
                    {"data" :"High-speed BIONZ X processing-engine"},
                    {"data" : "Up to 10 fps with AF/AE tracking"},
                    {"data" : "4K full-frame HDR Movie with full pixel readout"},
                    {"data" : "3-inch 922K-dot LCD touch screen"}
            ],
            MFR:"ILCE7M3K/B",
            FC: "ILCE7M3KB"},
            {src:tv,
                name:"TV",
                price:'400$',
                info:[
                    {"data" : "24.2MP BSI full-frame image sensor"},
                    {"data" :"High-speed BIONZ X processing-engine"},
                    {"data" : "Up to 10 fps with AF/AE tracking"},
                    {"data" : "4K full-frame HDR Movie with full pixel readout"},
                    {"data" : "3-inch 922K-dot LCD touch screen"}
            ],
            MFR:"ILCE7M3K/B",
            FC: "ILCE7M3KB"},
            {src:video,
                name:"Video",
                price:'195$',
                info:[
                    {"data" : "24.2MP BSI full-frame image sensor"},
                    {"data" :"High-speed BIONZ X processing-engine"},
                    {"data" : "Up to 10 fps with AF/AE tracking"},
                    {"data" : "4K full-frame HDR Movie with full pixel readout"},
                    {"data" : "3-inch 922K-dot LCD touch screen"}
            ],
            MFR:"ILCE7M3K/B",
            FC: "ILCE7M3KB" },
            {src:light,
                name:"Light",
                price:'20$',
                info:[
                    {"data" : "24.2MP BSI full-frame image sensor"},
                    {"data" :"High-speed BIONZ X processing-engine"},
                    {"data" : "Up to 10 fps with AF/AE tracking"},
                    {"data" : "4K full-frame HDR Movie with full pixel readout"},
                    {"data" : "3-inch 922K-dot LCD touch screen"}
            ],
            MFR:"ILCE7M3K/B",
            FC: "ILCE7M3KB"}

        ]

        const trends = [
            {src : "https://cdn3.focuscamera.com/media//2/6/260965.png",
             text :"Sigma 105mm f/2.8 Art DG DN Macro Lens for Sony E-Mount",
            price:"444$"},

            {src:"https://cdn3.focuscamera.com/media//y/e/yeti-red_2.png",
        text:"Blue Microphones Yeti Professional Multi-Pattern USB Microphone for Recording and Streaming (Satin Red)",
        price:"444$"},

            {src: "https://cdn3.focuscamera.com/media//2/7/2727c002.png",
        text:"Canon EOS Rebel T7 DSLR Camera and EF-S 18-55mm IS II Lens Kit",
        price:"444$"},

            {src:"https://cdn3.focuscamera.com/media//c/1/c11cg03201.png",
        text:"Epson WorkForce Pro WF-C5710 Inkjet Multifunction Printer",
        price:"444$"},

            {src:"https://cdn3.focuscamera.com/media//2/i/2i2-3g.png",
        text:"Focusrite Scarlett 2i2 3rd Gen 2x2 USB Audio Interface",
        price:"444$"},

            {src:"https://cdn3.focuscamera.com/media//h/p/hp11v069.png",
        text:"HP Chromebook 11.6-Inch WLED Intel Celeron N3060 4GB 16GB eMMC Chrome OS",
        price:"444$"},

            {src:"https://cdn3.focuscamera.com/media//0/1/01062.png",
        text:"Ricoh GR III Street Edition Digital Camera",
        price:"444$"}

        ];


        const blog = [
            {src : "https://www.focuscamera.com/wavelength/wp-content/uploads/2020/09/homepage-image-330x220-5-300x200.png",
             text :"Sigma 105mm f/2.8 Art DG DN Macro Lens for Sony E-Mount",
             date:"september 30 , 2020"
            },

            {src:"https://www.focuscamera.com/wavelength/wp-content/uploads/2020/09/sigma-105-f28-dg-dn-macro-art-330x220-1-300x200.png",
        text:"Blue Microphones Yeti Professional Multi-Pattern USB Microphone for Recording and Streaming (Satin Red)",
        date:"september 30 , 2020"
      },

            {src: "https://www.focuscamera.com/wavelength/wp-content/uploads/2020/09/podtrak-p4-330x220-1-300x200.png",
        text:"Canon EOS Rebel T7 DSLR Camera and EF-S 18-55mm IS II Lens Kit",
        date:"september 30 , 2020"
       },

            {src:"https://www.focuscamera.com/wavelength/wp-content/uploads/2020/09/homepage-image-330x220-4-300x200.png",
        text:"Epson WorkForce Pro WF-C5710 Inkjet Multifunction Printer",
        date:"september 30 , 2020"
        },

            {src:"https://www.focuscamera.com/wavelength/wp-content/uploads/2020/09/homepage-image-330x220-3-300x200.png",
        text:"Focusrite Scarlett 2i2 3rd Gen 2x2 USB Audio Interface",
        date:"september 30 , 2020"
        },

        ];
    
        return(
         <div>

             <div className={classes.CarouselDiv}>
             <Carousel autoPlay={true}
                interval='1000'
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}>
                <div className={classes.innerCarousel}>
                    <img src="https://scontent.fjrs14-1.fna.fbcdn.net/v/t1.15752-9/120928166_689550165245648_6504726808975464876_n.png?_nc_cat=104&_nc_sid=ae9488&_nc_ohc=2a2Husw0-jUAX8Pv1vE&_nc_ht=scontent.fjrs14-1.fna&oh=0bbd2df49f499ae841dcabcbf86387ec&oe=5FA25604" className={classes.innerCarousel} />
                   
                </div>
                <div className={classes.innerCarousel}>
                    <img src="https://cdn3.focuscamera.com/media/bannerslider/d/e/desktop_61.png" className={classes.innerCarousel} />
                   
                </div>
                <div className={classes.innerCarousel}>
                    <img src="https://cdn3.focuscamera.com/media/bannerslider/d/e/desktopb_1.png" className={classes.innerCarousel} />
                   
                </div>

                <div className={classes.innerCarousel}>
                    <img src="https://www.focuscamera.com/wavelength/wp-content/uploads/2020/09/Newsweek-BOS-2021-1180x559-1-887x420.png" className={classes.innerCarousel}/>
                   
                </div>


            </Carousel>
            </div>



            <div className={classes.myHome}>

          {images.map((image, index) => {
            return (
            <a key={index}>
                <MyImage imgLink={image.src} 
                price={image.price}
                FC={image.FC}
                MFR={image.MFR}
                info={image.info}
                name={image.name}/>
            </a>)})}
            </div>



 





            <h1 >Now Trending</h1>
             
            <div className={classes.Trend}>
      
          {trends.map((image, index) => {
            return (
            <div key={index} className={classes.card} >
                <img src={image.src} className={classes.innerImg} />
                <div className={classes.innerDiv}>{image.text}</div>
                <p style={{color:'red',textAlign:'left'}}>{image.price}</p>
            </div>)})}
            </div>




            
            <h1>Wavelength Blog</h1>
             
            <div className={classes.Trend}>
      
          {blog.map((image, index) => {
            return (
            <div key={index} className={classes.card} >
                <img src={image.src}  className={classes.innerImg} />
                <div className={classes.innerDiv}>{image.text}</div>
                <p style={{textAlign:'center' , color:'gray'}}>{image.date}  </p>

            </div>)})}
            </div>




         </div>






        )
    }
}