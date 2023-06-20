import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent min={0} max={100} defaultValue={20}/>
      <SliderComponent min={100} max={500} defaultValue={300}/>
      <SliderComponent min={150} max={600} defaultValue={400}/>


    </>
  );
}

export default SliderSelect;
