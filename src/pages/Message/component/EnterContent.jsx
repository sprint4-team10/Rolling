import TextFields from '../../../components/TextField/TextFields';

export const EnterContent = ({ setMessageData }) => {
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
