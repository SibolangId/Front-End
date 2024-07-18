import axios from 'axios';

const state = {
  destinations: [],
};

const getters = {
  allDestinations: (state) => state.destinations,
};

const actions = {
  async fetchDestinations({ commit, rootState }) {
    try {
      const token = rootState.token;
      const response = await axios.get('http://localhost:3000/api/destinations', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      commit('setDestinations', response.data);
    } catch (error) {
      console.error('Failed to fetch destinations:', error);
      throw error;
    }
  },
  async addDestination({ commit, rootState }, destination) {
    try {
      const token = rootState.token;
      const response = await axios.post('http://localhost:3000/api/destinations', destination, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      commit('newDestination', response.data);
    } catch (error) {
      console.error('Failed to add destination:', error);
      throw error;
    }
  },
};

const mutations = {
  setDestinations: (state, destinations) => (state.destinations = destinations),
  newDestination: (state, destination) => state.destinations.push(destination),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
