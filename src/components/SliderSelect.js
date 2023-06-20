import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        min={1000}
        max={10000}
        defaultValue={3000}
        step={1000}
        label="Home Value"
        onChange={(e) => console.log(e.target.value)}
      />

      <SliderComponent
        min={150}
        max={10000}
        defaultValue={600}
        step={1000}
        label="Down Payment"
        onChange={(e) => console.log(e.target.value)}
      />

      <SliderComponent
        min={100}
        max={12500}
        defaultValue={500}
        step={1000}
        label="Loan Amount"
        onChange={(e) => console.log(e.target.value)}
      />
    </>
  );
};

export default SliderSelect;
