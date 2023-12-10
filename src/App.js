import logo from "./logo.svg";
import Mainplayer from "./Mainplayer";
import Player from "./player";
import "./App.css";
import React from "react";

var videos = [
  {
    id: 1,
    title: "Grow your Business",
    thumbnail_url:
      "https://img.freepik.com/premium-psd/business-youtube-thumbnail-design-template_475351-263.jpg",
    likes: 13000,
    views: 27800,
    channelName: "Be Inspired",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKYcv_sW-2a37K0ZkZvTyRyC4Fw8RsK_WaHlQbQjMw=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,
    title: "How Has E-COMMERCE Been Going?|Economics Explained",
    thumbnail_url:
      "https://www.out-class.org/_next/image?url=https%3A%2F%2Foutclasslms.s3.ap-south-1.amazonaws.com%2Fuploads%2Fimages%2F893137a5-bf37-4b5e-bcd5-ff582d5a3967.webp&w=1920&q=75",
    likes: 27300,
    views: 472000,
    channelName: "Economics Explained ",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/LKssvfNuBZEZVm8uw78-X0X5oJbMFqViWN_UuzK450jyU9kT9Oy9lDcIjrPaEFmli6B9KANWnA=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 3,
    title: "Web Dev Tools and  JavaScript land",
    thumbnail_url:
      "https://i0.wp.com/basescripts.com/wp-content/uploads/2022/01/htmlcssj1s1.png?fit=2348%2C1452&ssl=1",
    likes: 11100,
    views: 21300,
    channelName: "Fireship",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 4,
    title: "Cities at Sea: How Aircraft Carriers Work",
    thumbnail_url:
      "https://preview.redd.it/g5h1ejp67dr61.jpg?auto=webp&s=53494203aafabceb4c948159e260934c8335b6f3",
    likes: 15200,
    views: 29300,
    channelName: "Wendover Productions",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/Qs26R6RA_ZNwCyPLsdtOS-8sM6k_TFVa6vNgFWbezvDr_mN097YVwT8fKGj5P_pY6midBYy6fQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 5,
    title: "The Ocean is Way Deeper Than You Think",
    thumbnail_url:
      "https://i.ytimg.com/vi/N7QovgzGcS0/maxresdefault.jpg",
    likes: 27300,
    views: 192000,
    channelName: "RealLifeLore",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKa4Ei0w6zq6FXKCD3tBEdPvTd70Cmo8ZoP5G02EHQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 6,
    title: "How A Nuclear War Will Start-Minute by Minute",
    thumbnail_url:
      "https://i.ytimg.com/vi/Gk7_0gQ59W0/maxresdefault.jpg",
    likes: 27300,
    views: 82200,
    channelName: "Kurzgesagt – In a Nutshell ",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKaHuotB178A3_ar_1xwrchH_bEo4wjg6A-kXFErPA=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 7,
    title: "5 Majedaar Gadgets I bought Online !",
    thumbnail_url:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/315424489/original/cf89d1a1a85933d07aca3fb299a5e461296467c2/design-a-tech-youtube-video-thumbnails.png",
    likes: 12500,
    views: 32300,
    channelName: "Tech Burner",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/0op3NrEEmhcR4jwkCnSNv4PWvHE6kj7He8C2aocxyLfx1Tx-hN1JwmxaUj5O626ooqnWSrCJ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 8,
    title: "How to Prepare and Speak in Public",
    thumbnail_url:
      "https://media.licdn.com/dms/image/D4D12AQG8o9AVx8sWUw/article-cover_image-shrink_720_1280/0/1653966069169?e=2147483647&v=beta&t=HMkKfy_jSs0cYWicZ6aMbOvPz2LtSfygnbUGB9tm-kI",
    likes: 11500,
    views: 54300,
    channelName: "Howcast",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKa2q7lycdP92alk6SxCFUx3cws4yQEAdgB7h5Z-eQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 9,
    title: "Inside China's Property Collapse (Evergrande Disaster)",
    thumbnail_url:
      "https://i.ytimg.com/vi/27x8s4jVqNI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDohMllUddTCcbkqXPXRwupuay_9A",
    likes: 9200,
    views: 22100,
    channelName: "ColdFusion",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKZnqu0dlQEACF98tCZHO1yYwzkqbbLZUjPMDm_fbA=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 10,
    title: "Wheel of Musical Impressions with Alessia Cara",
    thumbnail_url:
      "https://i.ytimg.com/vi/Eq1AU4Af96M/maxresdefault.jpg",
    likes: 32900,
    views: 391200,
    channelName: "Jimmy Fallon",
    channelLogoUrl:
      "https://indicepolitico.com/wp-content/uploads/2021/05/allon-tonight-show-hed-2014-jpg-jpg.jpg",
  },
];



function App() {
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };
  return(<div className="App">
 <Player videos={videos} onVideoClick={handleVideoClick}/>
 <Mainplayer videos={selectedVideo} />
  </div>) 
}

export default App;
