export const Button = (props) => {
  const { children, onButtonClick, css } = props;

  return (
    <button className={css} onClick={onButtonClick}>
      {children}
    </button>
  );
};
