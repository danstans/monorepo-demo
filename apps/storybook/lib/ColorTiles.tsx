const ColorTiles = ({ colors }: any): JSX.Element => {
  return (
    <>
      {Object.entries(colors).map(([colorKey, color]: [any, any]) => (
        <div
          key={colorKey}
          style={{
            display: "flex",
            padding: "32px",
            background: color,
            color: getContrastYIQ(color),
            fontFamily:
              '"Nunito Sans", ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue"',
          }}
        >
          <div style={{ flex: 2 }}>
            <strong>{colorKey}</strong>
          </div>
          {color}
        </div>
      ))}
    </>
  );
};

function getContrastYIQ(hexcolor: string) {
  hexcolor = hexcolor.replace("#", "");
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}

export default ColorTiles;
