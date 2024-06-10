import { BackgroundContainer, BackgroundImage } from "./components/Containers";
import imggeneral from 'assets/imggeneral.png'

const BackgroundImg = () => {
  return (
    <BackgroundContainer>
      <BackgroundImage src={imggeneral} alt="Background" />
    </BackgroundContainer>
  );
};

export default BackgroundImg;
