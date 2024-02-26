const PopOver = ({ popOverRef, isOpen, children, style }) => {
  if (!isOpen) {
    return <></>;
  }

  return (
    <div ref={popOverRef} style={style}>
      {children}
    </div>
  );
};

export default PopOver;
