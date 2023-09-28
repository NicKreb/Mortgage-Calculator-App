import React from 'react';
import SliderComponent from './common/sliderComponent';


const SliderSelect = ({ data, setData }) => {
  return (
    <>
      <SliderComponent
        label="Home Value"
        min={1000}
        max={10000}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e, value) => {
          setData({
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value
          })
        }}
        unit='$'
        amount={data.homeValue}
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) => {
          setData({
            ...data,
            loanAmount: (data.homeValue - value ),
            downPayment: value
          })
        }}
        unit='$'
        amount={data.downPayment}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) => {
          setData({
            ...data,
            downPayment: ( data.homeValue - value ),
            loanAmount: value
          })
        }}
        unit='$'
        amount={data.loanAmount}
      />
      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={.5}
        onChange={(e, value) => {
          setData({ 
            ...data,
            interestRate: value
           })
        }}
        unit='%'
        amount={data.interestRate}
      />
    </>
  )
}

export default SliderSelect