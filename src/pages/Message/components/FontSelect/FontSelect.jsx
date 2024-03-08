import TextFields from '../../../../components/TextField/TextFields';

const OPTIONS = [
  { value: 'Noto Sans', name: 'Noto Sans' },
  { value: 'Pretendard', name: 'Pretendard' },
  { value: '나눔명조', name: '나눔명조' },
  { value: '나눔손글씨 손편지체', name: '나눔손글씨 손편지체' },
];

export const FontSelect = ({ onChange }) => {
  const handleFontChange = (selectedOption) => {
    onChange('font', selectedOption);
  };

  // const handleFontChange = (selectedOption) => {
  //   onChange({ type: 'SET_FIELD', field: 'font', value: selectedOption.value });
  // };

  return (
    <>
      <TextFields
        textFieldType="Dropdown"
        defaultValue="Noto Sans"
        options={OPTIONS}
        width="72rem"
        onChange={handleFontChange}
      />
    </>
  );
};

export default FontSelect;
