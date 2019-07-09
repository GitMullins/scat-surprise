import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMyScats = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/scats.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const scats = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbkey) => {
          res.data[fbkey].id = fbkey;
          scats.push(res.data[fbkey]);
        });
      }
      resolve(scats);
    })
    .catch(err => reject(err));
});

const deleteScat = scatId => axios.delete(`${baseUrl}/scats/${scatId}.json`);

export default { getMyScats, deleteScat };
