import Select from 'react-select';

const options = [
  { value: 'option 1', label: 'Surplus' },
  { value: 'option 2', label: 'Adequacy' },
  { value: 'option 3', label: 'Shortage' },
];

const FinancialOption = () => {
  return (
    <div>
      <Select
        styles={{
          control: (base) => ({
            ...base,
            width: '370px',
            height: '50px',
            fontSize: '17px',
            paddingLeft: '10px',
          }),
        }}
        options={options}
      />
    </div>
  );
};

export default FinancialOption;
