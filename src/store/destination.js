import axios from 'axios';

const state = {
destinations: [],
};

const getters = {
allDestinations: (state) => state.destinations,
};

const actions = {
    async fetchDestinations({ commit }) {
        try {
        const response = await axios.get('http://localhost:3000/api/destinations');
        commit('setDestinations', response.data);
        } catch (error) {
        console.error('Failed to fetch destinations:', error);
        }
    },
    async addDestination({ commit }, destination) {
        try {
        const response = await axios.post('http://localhost:3000/api/destinations', destination);
        commit('newDestination', response.data);
        } catch (error) {
        console.error('Failed to add destination:', error);
        }
    },
};

const mutations = {
    setDestinations: (state, destinations) => (state.destinations = destinations),
    newDestination: (state, destination) => state.destinations.push(destination),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
