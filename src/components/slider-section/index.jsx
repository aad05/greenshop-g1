import { Carousel } from "antd";
import Slider1 from "./items/slide-1";

const SliderSecion = () => {
	return (
		<div className="w-[80%] h-[450px] m-auto bg-[#f5f5f5] mt-3">
			<Carousel>
				<Slider1 />
				<Slider1 />
				<Slider1 />
			</Carousel>
		</div>
	);
};

export default SliderSecion;
