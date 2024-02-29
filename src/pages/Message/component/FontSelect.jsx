import TextFields from '../../../components/TextField/TextFields';

const OPTIONS = [
  { value: 'Pretendard', name: 'Pretendard' },
  { value: 'Noto Sans', name: 'Noto Sans' },
];

export const FontSelect = ({ setMessageData }) => {
  const handleChange = (selectedOption) => {
    setMessageData((prevData) => ({
      ...prevData,
      font: selectedOption.value,
    }));
  };
  return (
    <>
      <TextFields
        textFieldType="Dropdown"
        defaultValue="폰트 선택"
        options={OPTIONS}
        width="72rem"
        onChange={handleChange}
      />
    </>
  );
};
