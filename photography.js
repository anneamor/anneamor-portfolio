alert("photography.js is connected");

console.log("Photography JS loaded");

/* ========================================
   ANNE AMOR PHOTOGRAPHY GALLERY
======================================== */

const photographyPath = "images/photography/";


/* ========================================
   TRAVEL & PLACES
======================================== */

const travelPhotos = [

  {
    file: "beijing_china_street_market.jpg",
    title: "Beijing Street Market",
    alt: "Busy street and market scene in Beijing, China"
  },

  {
    file: "great_wall_of_china_view.jpg",
    title: "Great Wall of China",
    alt: "Great Wall of China winding across green mountain ridges"
  },

  {
    file: "hualien_martyrs_shrine_taipei.jpg",
    title: "Hualien Martyrs Shrine",
    alt: "Traditional Chinese-style entrance at Hualien Martyrs Shrine in Taiwan"
  },

  {
    file: "pagoda_taroko_gorge_taiwan.jpg",
    title: "Taroko Gorge Pagoda",
    alt: "Pagoda surrounded by forest in Taroko Gorge, Taiwan"
  },

  {
    file: "taiwan_view_taipei101.jpg",
    title: "Taiwan from Above",
    alt: "Aerial view of a city and surrounding mountains in Taiwan"
  },

  {
    file: "tower_of_buddhist_incense_beijing_china.jpg",
    title: "Tower of Buddhist Incense",
    alt: "Tower of Buddhist Incense overlooking the water in Beijing, China"
  },

  {
    file: "leaving the town of seltepec.jpg",
    title: "Leaving Seltepec",
    alt: "Landscape viewed while leaving the town of Seltepec"
  },

  {
    file: "potzontepec hillside.jpg",
    title: "Potzontepec Hillside",
    alt: "Homes and vegetation across a hillside in Potzontepec, Mexico"
  },

  {
    file: "potzontepec.jpg",
    title: "Potzontepec",
    alt: "Mountain landscape and community in Potzontepec, Mexico"
  },

  {
    file: "rosarito green park hill.jpg",
    title: "Rosarito Hillside",
    alt: "Green hillside and park landscape in Rosarito, Mexico"
  },

  {
    file: "rosarito park.jpg",
    title: "Rosarito Park",
    alt: "Park landscape in Rosarito, Mexico"
  },

  {
    file: "seltepec hills.jpg",
    title: "Seltepec Hills",
    alt: "Green hills surrounding Seltepec, Mexico"
  },

  {
    file: "seltepec sky.jpg",
    title: "Seltepec Sky",
    alt: "Bright clouds and blue sky above the hills of Seltepec"
  }

];



/* ========================================
   LANDSCAPES & SKIES
======================================== */

const landscapePhotos = [

  {
    file: "blue mountain orange sky.jpg",
    title: "Blue Mountains",
    alt: "Layers of blue mountains beneath a warm orange sky"
  },

  {
    file: "death valley sunset.jpg",
    title: "Death Valley Sunset",
    alt: "Sunset spreading warm color across the desert landscape"
  },

  {
    file: "desert night sky.jpg",
    title: "Desert Night",
    alt: "Dark night sky above silhouetted desert vegetation"
  },

  {
    file: "desert sunset orange.jpg",
    title: "Desert Fire",
    alt: "Brilliant orange sunset over a wide desert landscape"
  },


  {
    file: "garnett sunset.jpg",
    title: "Garnett Sunset",
    alt: "Warm evening sunset over a natural landscape"
  },

  {
    file: "hidden snowy mountains.jpg",
    title: "Hidden Mountains",
    alt: "Snow-covered mountains partly hidden behind clouds"
  },

  {
    file: "jagged winter mountains.jpg",
    title: "Winter Peaks",
    alt: "Jagged snow-covered mountain peaks beneath clouds"
  },

  {
    file: "mexico island fog.jpg",
    title: "Islands in Fog",
    alt: "Small islands and distant mountains fading into fog"
  },

  {
    file: "mexico mini islands sunset.jpg",
    title: "Islands at Sunset",
    alt: "Small islands beneath warm evening light in Mexico"
  },

  {
    file: "mexico night haunted clouds.jpg",
    title: "Night Clouds",
    alt: "Dramatic clouds moving across a dark night sky in Mexico"
  },

  {
    file: "night sky clouds rosarito.jpg",
    title: "Rosarito Night Sky",
    alt: "Cloud formations across a deep blue night sky in Rosarito"
  },

  {
    file: "painted canyon.jpg",
    title: "Painted Canyon",
    alt: "Layered multicolored desert formations across Painted Canyon"
  },

  {
    file: "palm tree sunrise.jpg",
    title: "Palm Sunrise",
    alt: "Palm trees silhouetted beneath sunrise colors"
  },

  {
    file: "palm trees under streetlights.jpg",
    title: "Palms After Dark",
    alt: "Palm trees illuminated beneath streetlights at night"
  },

  {
    file: "rainbow sunset orange sky blue mountains.jpg",
    title: "Rainbow Sunset",
    alt: "Orange sunset and blue mountain layers beneath colorful clouds"
  },

  {
    file: "rosarito pink sky.jpg",
    title: "Rosarito Pink Sky",
    alt: "Soft pink evening sky above Rosarito"
  },

  {
    file: "southwest utah night.jpg",
    title: "Southwest Utah Night",
    alt: "Clouds and stars across a dramatic night sky in Utah"
  },

  {
    file: "sunrise flight.jpg",
    title: "Sunrise Flight",
    alt: "Orange sunrise above clouds viewed from an airplane"
  },

  {
    file: "utah blue sunrise.jpg",
    title: "Utah Blue Sunrise",
    alt: "Pink and blue sunrise above snow-covered Utah mountains"
  },

  {
    file: "utah sunrise.jpg",
    title: "Utah Sunrise",
    alt: "Sun rising over mountains in Utah"
  }

];



/* ========================================
   COAST & WATER
======================================== */

const coastPhotos = [

  {
    file: "coranado sunset.jpg",
    title: "Coronado Sunset",
    alt: "Golden sunset reflecting across Coronado Beach"
  },

  {
    file: "gloomy beach with grass.jpg",
    title: "Coastal Grass",
    alt: "Beach grass beneath a cloudy coastal sky"
  },

  {
    file: "gloomy sky at shore.jpg",
    title: "Stormy Shore",
    alt: "Dark clouds gathering above an ocean shoreline"
  },

  {
    file: "harbour sunrise.jpg",
    title: "Harbor Sunrise",
    alt: "Sunrise reflecting across San Diego Harbor"
  },

  {
    file: "iowa river 2.jpg",
    title: "Iowa River Light",
    alt: "Warm evening light across trees beside an Iowa river"
  },

  {
    file: "iowa river kyacking.jpg",
    title: "Iowa River",
    alt: "River landscape photographed while kayaking in Iowa"
  },

  {
    file: "iowa winter pond.jpg",
    title: "Winter Pond",
    alt: "Quiet winter pond surrounded by trees in Iowa"
  },

  {
    file: "la jolla ocean waves.jpg",
    title: "La Jolla Waves",
    alt: "Ocean waves breaking along the coast of La Jolla"
  },

  {
    file: "la jolla.jpg",
    title: "La Jolla Coast",
    alt: "Coastal landscape in La Jolla, California"
  },


  {
    file: "mexicobeach.jpg",
    title: "Mexico Shore",
    alt: "Ocean shoreline and beach landscape in Mexico"
  },

  {
    file: "ocean rock with moss.jpg",
    title: "Coastal Texture",
    alt: "Green moss growing across coastal rocks and tide pools"
  },

  {
    file: "peaceful sea view.jpg",
    title: "Peaceful Sea",
    alt: "Calm ocean stretching toward the horizon"
  },

  {
    file: "rainstorm on ocean.jpg",
    title: "Rainstorm at Sea",
    alt: "Rainstorm moving across the ocean"
  },

  {
    file: "san diego just before sunrise.jpg",
    title: "San Diego Before Sunrise",
    alt: "San Diego skyline reflected across calm water before sunrise"
  },

  {
    file: "sunny beach shore.jpg",
    title: "Sunny Shore",
    alt: "Bright sunny beach and ocean shoreline"
  },

  {
    file: "sunrise gazibo.jpg",
    title: "Gazebo Sunrise",
    alt: "Coastal gazebo beneath early morning light"
  },

  {
    file: "sunset sky gazibo beach.jpg",
    title: "Sunset Gazebo",
    alt: "Pastel sunset over an ocean shoreline and white gazebo"
  }

];



/* ========================================
   WILDLIFE
======================================== */

const wildlifePhotos = [

  {
    file: "horse looking back.jpg",
    title: "Looking Back",
    alt: "Gray horse looking backward through tall dry plants"
  },

  {
    file: "taiwan_bear.jpg",
    title: "Resting Bear",
    alt: "Black bear resting on a fallen tree in Taiwan"
  },

  {
    file: "sea lion king sun bathing.jpg",
    title: "Sea Lion King",
    alt: "Large sea lion sitting upright among coastal rocks"
  },

  {
    file: "sealions.jpg",
    title: "Sea Lions",
    alt: "Group of sea lions resting together along the coast"
  },

  {
    file: "sleeping sea lion.jpg",
    title: "Sleeping Sea Lion",
    alt: "Sea lion sleeping between coastal rocks"
  }

];



/* ========================================
   BOTANICAL DETAILS
======================================== */

const botanicalPhotos = [

  {
    file: "cacti.jpg",
    title: "Desert Cacti",
    alt: "Cluster of cactus plants in a desert setting"
  },

  {
    file: "cactus flowers and webs.jpg",
    title: "Desert Details",
    alt: "Purple cactus flowers, thorns, and delicate spiderwebs"
  },

  {
    file: "malephora crocea at beach.jpg",
    title: "Coastal Bloom",
    alt: "Malephora crocea flowers growing near the beach"
  },

  {
    file: "prickly cactus plant.jpg",
    title: "Prickly Bloom",
    alt: "Cactus surrounded by delicate purple flowers"
  },

  {
    file: "purple thistles.jpg",
    title: "Purple Thistles",
    alt: "Purple thistle flowers surrounded by green foliage"
  },

  {
    file: "red and white flower.jpg",
    title: "Red & White",
    alt: "Close-up view of a red and white flower"
  },

  {
    file: "sunbathing thorns.jpg",
    title: "Sunbathing Thorns",
    alt: "Cactus thorns catching bright sunlight"
  }

];



/* ========================================
   GALLERY GENERATOR
======================================== */

function createPhotoGallery(containerId, photos) {

  const gallery =
    document.getElementById(containerId);

  if (!gallery) {
    return;
  }


  photos.forEach(function (photo, index) {

    const figure =
      document.createElement("figure");

    figure.className = "portfolio-photo";


    /*
      Creates some visual variety without
      changing the actual photographs.
    */

    if (index % 7 === 0) {
      figure.classList.add("portfolio-photo-wide");
    }

    if (index % 6 === 3) {
      figure.classList.add("portfolio-photo-tall");
    }


    const link =
      document.createElement("a");

    link.href =
      photographyPath + photo.file;

    link.target = "_blank";
    link.rel = "noopener";

    link.setAttribute(
      "aria-label",
      "View " + photo.title + " full size"
    );


    const image =
      document.createElement("img");

    image.src =
      photographyPath + photo.file;

    image.alt =
      photo.alt;

    image.loading =
      containerId === "travel-gallery" &&
      index < 2
        ? "eager"
        : "lazy";


    const caption =
      document.createElement("figcaption");


    const title =
      document.createElement("span");

    title.textContent =
      photo.title;


    const viewText =
      document.createElement("small");

    viewText.textContent =
      "View full image";


    caption.appendChild(title);
    caption.appendChild(viewText);

    link.appendChild(image);

    figure.appendChild(link);
    figure.appendChild(caption);

    gallery.appendChild(figure);

  });

}



/* ========================================
   BUILD ALL GALLERIES
======================================== */

createPhotoGallery(
  "travel-gallery",
  travelPhotos
);

createPhotoGallery(
  "landscape-gallery",
  landscapePhotos
);

createPhotoGallery(
  "coast-gallery",
  coastPhotos
);

createPhotoGallery(
  "wildlife-gallery",
  wildlifePhotos
);

createPhotoGallery(
  "botanical-gallery",
  botanicalPhotos
);

/* ========================================
   DEBUG
======================================== */
console.log("Travel gallery:", document.getElementById("travel-gallery"));
console.log("Landscape gallery:", document.getElementById("landscape-gallery"));
console.log("Coast gallery:", document.getElementById("coast-gallery"));
console.log("Wildlife gallery:", document.getElementById("wildlife-gallery"));
console.log("Botanical gallery:", document.getElementById("botanical-gallery"));