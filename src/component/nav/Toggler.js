import { useState } from "react";

const Toggler = (initialImage, alternateImage) => {
    const [currentImage, setCurrentImage] = useState(initialImage);

    const toggleImage = () => {
        setCurrentImage(currentImage === initialImage ? alternateImage : initialImage);
    };

    return [currentImage, toggleImage];
};

export default Toggler;
