import companyService from '../../api/company'

// initial state
const state = {
  companies: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts ({ commit }) {
    companyService.getCompanies(companies => {
      commit('setCompanies', companies)
    })
  },
  saveCompany({commit}, company){ 
      companyService.saveCompany(()=>{
      commit('setCompany',company);
      })
  }
}

// mutations
const mutations = {
  setCompanies (state, products) {
    state.companies = products
  },

  setCompany (state, company) {
    state.companies.push(company);    
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}