const ColoredLine = ({ color, margin }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: '2',
            opacity: '0.25',
            margin: margin,
        }}
    />
  );

export default ColoredLine;