"use client";

import { /* useAppDispatch */ useAppSelector } from "@/src/store/hooks/hook";

export default function DataPage() {
  /* 
    const dispatch = useAppDispatch() */
  const data = useAppSelector((state) => state.data);
  const mayores = data.filter((item) => item.edad > 18);
  console.log(mayores);

  return (
    <div>
      {mayores.map((item) => (
        <div key={item.id}>
          <p>{item.edad}</p>
        </div>
      ))}
    </div>
  );
}
