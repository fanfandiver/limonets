import React from 'react';
import './GalleryPopup.css';



function GalleryPopup(props) {
    const imageData = [
      {
        id: 0,
        imgSm: "https://www.w3schools.com/howto/img_woods.jpg",
        imgLg: "https://www.w3schools.com/howto/img_woods_wide.jpg",
        caption: "The Woods",
      },
      {
        id: 1,
        imgSm: "https://www.w3schools.com/howto/img_5terre.jpg",
        imgLg: "https://www.w3schools.com/howto/img_5terre_wide.jpg",
        caption: "Cinque Terre",
      },
      {
        id: 2,
        imgSm: "https://www.w3schools.com/howto/img_lights.jpg" ,
        imgLg: "https://www.w3schools.com/howto/img_lights_wide.jpg" ,
        caption: "Northern Lights",
      },
      {
        id: 3,
        imgSm: "https://www.w3schools.com/howto/img_nature.jpg",
        imgLg: "https://www.w3schools.com/howto/img_nature_wide.jpg",
        caption: "Nature and sunrise",
      },
      {
        id: 4,
        imgSm: "https://www.w3schools.com/howto/img_snow.jpg",
        imgLg: "https://www.w3schools.com/howto/img_snow_wide.jpg",
        caption: "Snowy Mountains",
      },
      {
        id: 5,
        imgSm: "https://www.w3schools.com/howto/img_mountains.jpg",
        imgLg: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
        caption: "Mountains and fjords",
      }
    ];
    const [slides, loadSlides] = React.useState(imageData);
    const [slideId, setSlideId] = React.useState(0);
    const [currentSlide, setCurrSlide] = React.useState(slides[slideId]);
 //   const [machin, setMAchin] = REact.useState({
      // nom : 'test'
 //     prenom 'test'
   // })
  //  this.state = {
  //    slides : imageData
  //  }
 // setMAchin({
  //  ...machin
  //  prenom : 'test'
  //})
  //  this.setState({
    //  slides : 'machin'
  //  })

  //  loadSlides('md')
  //  setCurrSlide('qlqchose')
  //  React.useEffect(() => {
  //    setCurrSlide(slides[slideId]) 
  //  });
  
      function handleClick(id) {
      setSlideId(id);
      setCurrSlide(slides[slideId]);
    } 
    
    function goFwd() {
      slideId === 5 ? setSlideId(0) : setSlideId(slideId => slideId + 1);
      setCurrSlide(slides[slideId]);
    }
    
    function goBack() {
      slideId === 0 ? setSlideId(5) : setSlideId(slideId => slideId  - 1);
      setCurrSlide(slides[slideId]);
    }
    
    return (
      <section className="container">
        
        <Slide currentSlide={currentSlide} />
             
        <Caption 
          caption={currentSlide.caption}
          goBack={goBack}
          goFwd={goFwd} />
  
        <ThumbnailList 
          slides={slides}
          setSlideId={setSlideId}
          slideId={slideId}
          handleClick={handleClick} />  
        
      </section>
    )
  }
  
  
  function Slide({currentSlide}) {
    return (
      <div className="mySlides show">
        <div className="numbertext">{currentSlide.id + 1} / 6</div>
        <img src={currentSlide.imgLg} />
      </div>
    )
  }
  
  function Caption({goBack, caption, goFwd}) {
    return (
      <section className="caption-container">
        <a className="prev"
           onClick={() => goBack()}>&#10094;</a>
  
        <p id="caption">{caption}</p>
  
        <a className="next"
           onClick={() => goFwd()}>&#10095;</a>
      </section>
    )
  }
  
  function ThumbnailList({slides, slideId, handleClick}) {
    return (
      <section id="thumbnail-section" className="row">
        {
          slides.map(thumbnail => {
            return <Thumbnail key={thumbnail.id}
                          id={thumbnail.id}
                          src={thumbnail.imgSm} 
                          alt={thumbnail.caption}
                          slideId={slideId}
                          handleClick={handleClick}
                    />
          })
        }
      </section>
    )
  }
  
  function Thumbnail({src, alt, id, slideId, handleClick}) {
    return (
      <div className="thumbnail">
        <img className={slideId === id ? "demo cursor active" : "demo cursor"}
             src={src} 
             alt={alt}
             onClick={() => handleClick(id)} 
        />
      </div>
    )
  }
  
export default GalleryPopup;