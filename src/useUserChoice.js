import React, { useEffect, useState } from "react";

const useUserChoice = () => {
  const [ userChoice, setUserChoice ] = useState(null);



  return [ userChoice, setUserChoice ];
};

export default useUserChoice;