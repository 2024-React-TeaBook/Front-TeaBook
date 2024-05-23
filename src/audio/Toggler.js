import { useState } from "react";

const Toggler = (initialImage, alternateImage) => {
    const [currentImage, setCurrentImage] = useState(initialImage);

    const toggleImage = () => {
        setCurrentImage(currentImage === initialImage ? alternateImage : initialImage);
    };

    // stop과 play 이미지의 순서를 바꾸기 위해 반환 값을 반대로 조정합니다.
    return [currentImage === initialImage ? alternateImage : initialImage, toggleImage];
};

export default Toggler;
 