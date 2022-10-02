import { Select, CheckIcon, Center } from 'native-base';

import { PRIMARY_COLOR } from '../../constants';

const FormSelect = ({ currentValue, handleOnChange, selectOptions }) => {
  return (
    <Center>
      <Select
        selectedValue={currentValue}
        minWidth='250'
        p={2}
        _selectedItem={{
          bg: PRIMARY_COLOR,
          endIcon: <CheckIcon size={4} />,
        }}
        onValueChange={(itemVale) => handleOnChange(itemVale)}
      >
        {selectOptions.map((option, index) => {
          return <Select.Item key={option + index} label={option} value={option} />;
        })}
      </Select>
    </Center>
  );
};

export default FormSelect;
