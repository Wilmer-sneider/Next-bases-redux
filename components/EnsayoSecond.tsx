type Prop = {
  count: number;
};

export default function EnsayoSecond({ count }: Prop) {
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
