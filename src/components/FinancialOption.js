import Select from 'react-select';

const options = [
  { value: 'Surplus', label: 'Surplus' },
  { value: 'Adequacy', label: 'Adequacy' },
  { value: 'Shortage', label: 'Shortage' },
];

const FinancialOption = ({ onChange }) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption.value);
  };
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
        placeholder="Financial status"
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default FinancialOption;
