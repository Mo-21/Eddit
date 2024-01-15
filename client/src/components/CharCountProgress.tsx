interface Props {
  count: number;
  isShown: boolean;
}

const CharCountProgress = ({ count, isShown }: Props) => {
  return (
    <div
      className="radial-progress mr-5 main-color"
      style={
        {
          "--value": count,
          color: count === 280 ? "red" : "",
          visibility: isShown ? "visible" : "hidden",
        } as React.CSSProperties
      }
      role="progressbar"
    ></div>
  );
};

export default CharCountProgress;
