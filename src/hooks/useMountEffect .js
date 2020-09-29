import { useEffect } from "react";

// Run useEffect only once
const useMountEffect = (fun) => useEffect(fun, []);

export default useMountEffect;
