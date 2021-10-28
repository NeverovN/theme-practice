import {IPost} from '../types/post';

export const mapDataToPosts = (data: any[]): IPost[] => {
  const mappedData = data.map(el => {
    if (
      !el.id ||
      (typeof el.id !== 'string' && typeof el.id !== 'number') ||
      Number.isNaN(Number(el.id))
    ) {
      return;
    }
    if (
      !el.userId ||
      (typeof el.userId !== 'string' && typeof el.userId !== 'number') ||
      Number.isNaN(Number(el.userId))
    ) {
      return;
    }
    if (!el.title || typeof el.title !== 'string') {
      return;
    }
    if (!el.body || typeof el.body !== 'string') {
      return;
    }

    return {
      id: Number(el.id),
      userID: Number(el.userId),
      title: el.title,
      body: el.body,
    } as IPost;
  });

  return mappedData.filter(Boolean);
};
