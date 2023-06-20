import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({data, setData}) => {
  console.log(data)
  return (
    <>
      <SliderComponent
        min={1000}
        max={10000}
        defaultValue={data.homeValue}
        step={100}
        value = {data.homeValue}
        label="Home Value"
        onChange={(e, value) => setData({
          ...data, 
          downPayment: value * 0.2,
          loanAmount: value * 0.8,
          homeValue : value
        })}
      />

      <SliderComponent
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        step={100}
        value = {data.downPayment}
        label="Down Payment"
        onChange={(e, value) => setData({
          ...data,
          loanAmount:( data.homeValue - value),
          downPayment : value
        })}
      />

      <SliderComponent
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value = {data.loanAmount}
        step={100}
        label="Loan Amount"
        onChange={(e, value) => setData({
          ...data,
          downPayment: (data.homeValue - value),
          loanAmount : value
        })}
      />

<SliderComponent
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value = {data.interestRate}
        step={1}
        label="Interest Rate"
        onChange={(e, value) => setData({
          ...data, 
          interestRate: value
        })}
      />
    </>
  );
};

export default SliderSelect;
