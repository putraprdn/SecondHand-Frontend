import AdsCard from "./components/AdsCard";
import Slider from "react-slick";

const AdsCarousel = () => {
    const settings = {
        className: "center",
        dots: true,
        arrows: false,
        centerMode: true,
        infinite: true,
        autoplay: true,
        centerPadding: "0px",
        slidesToShow: 1.66,
        speed: 500,
    };

    return (
        <Slider {...settings}>
            <div>
                <AdsCard adsImage={"https://images7.alphacoders.com/114/1148654.jpg"} adsTitle={"Lorem Ipsum"} adsDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
            </div>
            <div>
                <AdsCard adsImage={"https://img.wallpapersafari.com/desktop/1600/900/45/12/YZadML.jpg"} adsTitle={"Lorem Ipsum"} adsDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
            </div>
            <div>
                <AdsCard adsImage={"https://i.redd.it/uglq28qfk7g11.png"} adsTitle={"Lorem Ipsum"} adsDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
            </div>
            <div>
                <AdsCard adsImage={"https://pbs.twimg.com/media/EHhiMm7XkAIm3ag.jpg"} adsTitle={"Lorem Ipsum"} adsDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
            </div>
        </Slider>
    )
}

export default AdsCarousel;