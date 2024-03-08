import TextFields from '../../../../components/TextField/TextFields';

const EnterContent = ({ setMessageData }) => {
  const handleChange = (content) => {
    setMessageData((prevData) => ({
      ...prevData,
      content: content,
    }));
  };
  return (
    <>
      <TextFields textFieldType="TextEditor" onChange={handleChange} />
    </>
  );
};

export default EnterContent;
