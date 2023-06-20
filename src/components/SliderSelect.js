import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({data, setData}) => {
  console.log(data)
  return (
    <>
      <SliderComponent
        min={1000}
        max={10000}
        defaultValue={data.homeValue}
        step={1000}
        value = {data.homeValue}
        label="Home Value"
        onChange={(e, value) => setData({
          ...data, 
          homeValue : value
        })}
      />

      <SliderComponent
        min={1000}
        max={data.homeValue}
        defaultValue={data.downPayment}
        step={1000}
        value = {data.downPayment}
        label="Down Payment"
        onChange={(e, value) => setData({
          ...data,
          downPayment : value
        })}
      />

      <SliderComponent
        min={100}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value = {data.loanAmount}
        step={1000}
        label="Loan Amount"
        onChange={(e, value) => setData({
          ...data,
          loanAmount : value
        })}
      />

<SliderComponent
        min={100}
        max={12500}
        defaultValue={500}
        value = {data.loanAmount}
        step={1000}
        label="Interest Rate"
        onChange={(e) => console.log(e.target.value)}
      />
    </>
  );
};

export default SliderSelect;
