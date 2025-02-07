//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//This is the functional component that takes data from FallbackMessage_DataProvider,
// and send it to FallbackMessage as the props.
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

import { useContext } from "react";
import { FallbackContext } from "../../../utiles/contexts/FallbackMessage_DataProvider.jsx";
import FallbacMessage from "../fallback_message/FallbackMessage.jsx";

const FallbackProvider = () => {
  const { fallbackData } = useContext(FallbackContext);

  return (
    <>
      {fallbackData.map((fallback) => (
        <FallbacMessage key={fallback.id} fallback={fallback} />
      ))}
    </>
  );
};

export default FallbackProvider;
