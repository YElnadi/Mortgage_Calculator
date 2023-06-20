import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        min={1000}
        max={10000}
        defaultValue={3000}
        step={1000}
        onChange={(e) => console.log(e.target.value)}
      />
    </>
  );
};

export default SliderSelect;
