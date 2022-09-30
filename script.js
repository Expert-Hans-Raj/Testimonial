/*  testimonial_slider */ 



  $('.testimonial_slider').slick({
      infinite: true,
      slidesToShow: 1, 
      autoplay: false,
      dots: false,
      slidesToScroll: 1, 
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
            centerPadding: '40px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerPadding: '40px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerPadding: '40px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
/*  testimonial_slider */
