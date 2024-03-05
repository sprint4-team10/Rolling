import TextFields from '../../../../components/TextField/TextFields';

const OPTIONS = [
  { value: '지인', name: '지인' },
  { value: '동료', name: '동료' },
  { value: '가족', name: '가족' },
  { value: '친구', name: '친구' },
];

const RelationshipSelect = ({ setMessageData }) => {
  const handleChange = (selectedOption) => {
    setMessageData((prevData) => ({
      ...prevData,
      relationship: selectedOption,
    }));
  };

  return (
    <>
      <TextFields
        textFieldType="Dropdown"
        defaultValue="지인"
        options={OPTIONS}
        width="72rem"
        name="relationship"
        onChange={handleChange}
      />
    </>
  );
};

export default RelationshipSelect;
