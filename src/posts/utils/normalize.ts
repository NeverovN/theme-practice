type Normalizable = {
  id: string | number;
};

type Normalized<T extends Normalizable> = Record<T['id'], T>;

export function normalize<T extends Normalizable>(data: T[]) {
  return data.reduce((acc, curr) => {
    return {...acc, [curr.id]: curr};
  }, {} as Normalized<T>);
}
