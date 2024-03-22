import React, { useEffect } from "react";
import styles from "./styles/events.css";
import AOS from "aos";
import { useState } from 'react'
import { Link } from 'react-router-dom'

AOS.init()


import Aperture from "./../assets/eventThumbnails/Aperture.webp";
import CrypticHunt from "./../assets/eventThumbnails/crypticHunt.webp";
import BrainWars from "./../assets/eventThumbnails/BrainWars.webp";
import Illuminati from "./../assets/eventThumbnails/GroupDiscussion.webp";
import Upvento from "./../assets/eventThumbnails/Upvento.webp";
import GameAThon from "./../assets/eventThumbnails/gameAThon.jpg";
import RaiseARap from "./../assets/eventThumbnails/raiseARap.webp";
import Equinox from "./../assets/eventThumbnails/Equinox.png";
import ReworkRender from "./../assets/eventThumbnails/ReworkRender.webp";
import Minecraft from "./../assets/eventThumbnails/Minecraft.webp";
import Kubrikism from "./../assets/eventThumbnails/Kubrikism.webp";
import Memeology from "./../assets/eventThumbnails/Memeology.jpg";
import Dexterity from "./../assets/eventThumbnails/Dexterity.webp";
import Ragnarok from "./../assets/eventThumbnails/Ragnarok.webp";
import AsimovWars from "./../assets/eventThumbnails/AsimovWars.webp";
import Typestry from "./../assets/eventThumbnails/Typestry.webp";




const Events = ( color) => {

  const EventsMetaData = [
    {
      Name: "Cryptic Hunt",
      id: 1,
      href: "https://cryptichunt.wartex.co.in",
      imageLink: `${CrypticHunt}`,
    },
    {
      Name: "Ragnarok",
      id: 14,
      href: "/Events/Ragnarok",
      imageLink: `${Ragnarok}`,
    },
    {
      Name: "Minecraft",
      id: 9,
      href: "/Events/Minecraft",
      imageLink: `${Minecraft}`,
    },
    {
      Name: "Memology",
      id: 11,
      href: "/Events/Memeology",
      imageLink: `${Memeology}`,
    },
    {
      Name: "Game-A-Thon",
      id: 5,
      href: "/Events/Game-A-thon",
      imageLink: `${GameAThon}`,
    },
    {
      Name: "Group discussion",
      id: 3,
      href: "/Events/GroupDiscussion",
      imageLink: `${Illuminati}`,
    },
    {
      Name: "Upvento",
      id: 4,
      href: "/Events/Upvento",
      imageLink: `${Upvento}`,
    },
    {
      Name: "Aperture",
      id: 13,
      href: "/Events/Aperture",
      imageLink: `${Aperture}`,
    },

    {
      Name: "Brain Wars",
      id: 2,
      href: "/Events/BrainWars",
      imageLink: `${BrainWars}`,
    },
    {
      Name: "Typing Monkey",
      id: 16,
      href: "/Events/Typestry",
      imageLink: `${Typestry}`,
    },

    {
      Name: "Raise-A-Rap",
      id: 6,
      href: "/Events/RaiseARap",
      imageLink: `${RaiseARap}`,
    },

    {
      Name: "Rework Render",
      id: 8,
      href: "/Events/ReworkRender",
      imageLink: `${ReworkRender}`,
    },

    {
      Name: "Kubrikism",
      id: 10,
      href: "/Events/Kubrikism",
      imageLink: `${Kubrikism}`,
    },

    {
      Name: "Dexterity",
      id: 12,
      href: "/Events/Dexterity",
      imageLink: `${Dexterity}`,
    },

    {
      Name: "Asimov Wars",
      id: 15,
      href: "/Events/AsimovWars",
      imageLink: `${AsimovWars}`,
    },
    {
      Name: "Equinox",
      id: 7,
      href: "/Events/Equinox",
      imageLink: `${Equinox}`,
    },
  ];
 

    const [inView, setInView] = useState(false);

    useEffect(() => {
        let progress = 10;
        let startX = 0;
        let active = 0;
        let isDown = false;
      
        /*--------------------
      Contants
      --------------------*/
        const speedWheel = 0.01 ;
        const speedDrag = -0.1;
      
        /*--------------------
      Get Z
      --------------------*/
        const getZindex = (array, index) =>
          array.map((_, i) =>
            index === i ? array.length : array.length - Math.abs(index - i)
          );
      
        /*--------------------
      Items
      --------------------*/
        const $items = document.querySelectorAll(".carousel-item");
        const $cursors = document.querySelectorAll(".cursor");
      
        const displayItems = (item, index, active) => {
          const zIndex = getZindex([...$items], active)[index];
          item.style.setProperty("--zIndex", zIndex);
          item.style.setProperty("--active", (index - active) / $items.length);
        };
      
        /*--------------------
      Animate
      --------------------*/
        const animate = () => {
          progress = Math.max(0, Math.min(progress, 100));
          active = Math.floor((progress / 100) * ($items.length - 1));
      
          $items.forEach((item, index) => displayItems(item, index, active));
        };
        animate();
      
        /*--------------------
      Click on Items
      --------------------*/
        $items.forEach((item, i) => {
          item.addEventListener("click", () => {
            progress = (i / $items.length) * 100 + 10;
            animate();
          });
        });
      
        /*--------------------
      Handlers
      --------------------*/
        // const handleWheel = (e) => {
        //   const wheelProgress = e.deltaY * speedWheel;
        //   progress = progress + wheelProgress;
        //   animate();

         
        // };
      
        const handleMouseMove = (e) => {
          if (e.type === "mousemove") {
            $cursors.forEach(($cursor) => {
              $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            });
          }
          if (!isDown) return;
          const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
          const mouseProgress = (x - startX) * speedDrag;
          progress = progress + mouseProgress;
          startX = x;
          animate();
        };
      
        const handleMouseDown = (e) => {
          isDown = true;
          startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        };
      
        const handleMouseUp = () => {
          isDown = false;
        };
      
        /*--------------------
      Listeners
      --------------------*/
        // window.addEventListener("mousewheel", handleWheel);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchstart", handleMouseDown);
        window.addEventListener("touchmove", handleMouseMove);
        window.addEventListener("touchend", handleMouseUp);
      }, []); // <- add empty brackets here

  /*--------------------
Vars
--------------------*/

  return (<>
<div className="bg-black">

<h1 data-aos="fade-up" data-aos-duration="750" className={"text-center drop-shadow-[0_0px_35px_#007bc4] text-[#007bc4] mb-14 mt-32 text-4xl heading"}>THE EVENTS</h1> 

    
    <div  className="carousel">

    {EventsMetaData.map((Event, key) => (
      <div key={key} className="z-[100]">
<Link to={Event.href}  className="carousel-item" style={{backgroundImage : `url(${Event.imageLink})`, backgroundSize : "cover", backgroundPosition : "left center "}}>
        <div className="carousel-box " >
          {/* <div className="title integral"><Link to={Event.href}>LEARN MORE →</Link></div> */}
          {/* <div className="num text-[10px] akira"> {Event.Name} <br />#{Event.id}</div> */}
          {/* <img src={Event.imageLink} loading="lazy" alt="Image" className="bg-center" /> */}

        </div>
      </Link>
      </div>
    ))}
      
    
      </div></div>
    </>
  );
}

export default Events