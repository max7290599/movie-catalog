import axios from '../axios';

const getMovie = async (nameMovie, page=1) => {
  try {
    const response = await axios.get(
      `?&apikey=8523cbb8&s=${nameMovie}&page=${page}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getMovie;