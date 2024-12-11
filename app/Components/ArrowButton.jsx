export const ArrowButton = ({ direction, onClick, icon }) => {
    return (
      <button
      className="mobile:hidden
      tablet:block"
        onClick={onClick}
        style={{
          position: "absolute",
          [direction === "left" ? "left" : "right"]: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        <img className="w-[29px]" src={icon} alt={`${direction} arrow`} />
      </button>
    );
  };
  