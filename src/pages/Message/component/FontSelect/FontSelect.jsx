import TextFields from '../../../../components/TextField/TextFields';

const OPTIONS = [
  { value: 'Noto Sans', name: 'Noto Sans' },
  { value: 'Pretendard', name: 'Pretendard' },
];

export const FontSelect = ({ setMessageData }) => {
  const handleChange = (selectedOption) => {
    setMessageData((prevData) => ({
      ...prevData,
      font: selectedOption,
    }));
  };

  return (
    <>
      <TextFields
        textFieldType="Dropdown"
        defaultValue="Noto Sans"
        options={OPTIONS}
        width="72rem"
        onChange={handleChange}
      />
    </>
  );
};

export default FontSelect;
