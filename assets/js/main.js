$(document).ready(function () {
  // choses-slider

  AOS.init();

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    loop: true,
    dots: false,
    autoplay: true,
    asNavFor: ".slider-nav",
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return "<a>" + (i + 1) + "</a>";
    },
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    asNavFor: ".slider-for",
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,

  });

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      $(".mynavbar").addClass("fixed-navbar");
      $("#floating").css("opacity", "1");
    } else {
      $(".mynavbar").removeClass("fixed-navbar");
      $("#floating").css("opacity", "0");
    }
  });

  $("#floating").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      50
    );
  });

  if ($(".langSelect").length) {
    $(".langSelect").niceSelect();
  }

  if($('.customSelect').length){
    $('.customSelect').niceSelect();
  }

  $(".sidenav li.NesteListParent").click(function () {
    $(this).children("ul").slideToggle();
    $(this).children("i").toggleClass("iMenue");
  });

  if ($(".counter").length) {
    $(".counter").counterUp({
      time: 1000,
    });
  }

  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".webinars-slider").length) {
    $(".webinars-slider").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      rtl: currentDir == "rtl" ? true : false,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1026,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".our-team-slider").length) {
    $(".our-team-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      rtl: currentDir == "rtl" ? true : false,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1026,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".sheepPeersForm").length) {
    $(".sheepPeersForm .form-control").on("focus", function () {
      $(this).parent(".form-group").find("label").addClass("activeInput");
      console.log("foces");
    });

    $(".sheepPeersForm .form-control").on("blur", function () {
      $(this).parent(".form-group").find("label").removeClass("activeInput");
      console.log("foces");
    });
  }


  if($('.upload-file').length){
    $('body').on('change', '.custom-file-input ', function(e){
      var fileName = e.target.files[0].name;
      $(this).siblings('.custom-file-label').text(fileName);
      $(this).closest('.upload-file').find(".deleteFile").addClass("activeInput");
    })
  }

  if($('.deleteFile').length){
    let fileLabel = $('.deleteFile').closest('.upload-file').find('.custom-file-label').text();
    $('.deleteFile').click(function(){
      // $(this).fadeOut(500);
      $(this).closest('.upload-file').find('.custom-file-input').val("");
      $(this).closest('.upload-file').find('.custom-file-label').text(fileLabel);
      $(this).removeClass("activeInput");
    })
  }


  if ($("#repeater").length) {
    $("#repeater").createRepeater({
      showFirstItemToDefault: true,
    });
  }

});

function openNav() {
  document.getElementById("mySidenav").style.right = "0";
  document.querySelector(".bg-sidenavOpen").style.display = "block";
  document.body.classList.add("openMenuActive");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.right = "-400px";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
}

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("displayNone");
  });
});


if($('.drop-zone').length){
  document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });
  
    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
  
      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
  
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
  
  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
  
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
  
    thumbnailElement.dataset.label = file.name;
  
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }
  

}

