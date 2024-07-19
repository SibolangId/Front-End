// store/modules/destination.js

import axios from "axios";

const state = {
  destinations: [],
  searchQuery: "",
};

const getters = {
  allDestinations: state => state.destinations,
  filteredDestinations: state => {
    return state.destinations.filter(destination =>
      destination.name.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  },
};

const actions = {
  async fetchDestinations({ commit, rootState }) {
    try {
      const token = rootState.token;
      const response = await axios.get("http://localhost:3000/api/destinations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit("setDestinations", response.data.data); // Ensure it matches your API response
    } catch (error) {
      console.error("Failed to fetch destinations:", error);
      throw error;
    }
  },
  async addDestination({ commit, rootState }, destination) {
    try {
      const token = rootState.token;
      const response = await axios.post("http://localhost:3000/api/destinations", destination, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit("newDestination", response.data.data); // Ensure it matches your API response
    } catch (error) {
      console.error("Failed to add destination:", error);
      throw error;
    }
  },
  setSearchQuery({ commit }, query) {
    commit('setSearchQuery', query);
  },
};

const mutations = {
  setDestinations: (state, destinations) => (state.destinations = destinations),
  newDestination: (state, destination) => state.destinations.push(destination),
  setSearchQuery: (state, query) => (state.searchQuery = query),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
