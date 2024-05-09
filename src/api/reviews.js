import { nanoid } from 'nanoid';

const reviews = [
  {
    id: nanoid(),
    author: 'John Doe',
    rating: 5,
    comment:
      'Great experience! The service was excellent and the staff was very friendly. I highly recommend this place.',
  },
  {
    id: nanoid(),
    author: 'Jane Smith',
    rating: 4,
    comment:
      'I had a wonderful time here. The food was delicious and the atmosphere was cozy. Will definitely come back again.',
  },
  {
    id: nanoid(),
    author: 'Mike Johnson',
    rating: 5,
    comment:
      "Amazing service! The staff went above and beyond to make sure we had a fantastic experience. I can't wait to visit again.",
  },
  {
    id: nanoid(),
    author: 'Emily Brown',
    rating: 3,
    comment:
      'The food was decent, but the service was a bit slow. Overall, it was an okay experience.',
  },
  {
    id: nanoid(),
    author: 'David Wilson',
    rating: 5,
    comment:
      'Absolutely loved it! The food was delicious and the ambiance was perfect. Would definitely recommend it to anyone.',
  },
];

export const getReviews = () => {
  return reviews;
};

export const getReviewById = id => {
  return reviews.find(review => review.id === id);
};
