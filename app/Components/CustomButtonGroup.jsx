import { ArrowButton } from "./ArrowButton";

export const CustomButtonGroup = ({ next, previous }) => {
    return (
      <>
        <ArrowButton direction="left" onClick={previous} icon='leftarrow.svg' />
        <ArrowButton direction="right" onClick={next} icon='rightArrow.svg' />
      </>
    );
  };
  