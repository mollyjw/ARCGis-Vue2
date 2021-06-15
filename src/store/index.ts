import Lead from '@/models/lead'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    allLeadsArray: [
      {
        "LeadID": "1",
        "Retailer": "0",
        "FirstName": "Grey",
        "LastName": "Ruessler",
        "Email": "greyson.ruessler@wwinc.com",
        "ContactPhone": "682-472-1764",
        "ContactBusinessName": null,
        "ContactPhoneExt": "",
        "StreetAddress": "3065 William St",
        "City": "Cape Girardeau",
        "State": "MO",
        "Zip": "63701",
        "Country": "United States",
        "ProjectType": "string",
        "Describe": "string",
        "Comments": "string",
        "DistributionArea": "0",
        "Created": "2021-03-18T17:07:59.2130000",
        "Processed": null
      },
      {
        "LeadID": "4",
        "Retailer": "0",
        "FirstName": "Woody",
        "LastName": "Forrest",
        "Email": "greyson.ruessler@wwinc.com",
        "ContactPhone": "682-472-1764",
        "ContactBusinessName": null,
        "ContactPhoneExt": "",
        "StreetAddress": "1234 Main St",
        "City": "Cape Girardeau",
        "State": "MO",
        "Zip": "63703",
        "Country": "United States",
        "ProjectType": "string",
        "Describe": "description",
        "Comments": "comments here",
        "DistributionArea": "0",
        "Created": "2021-03-18T17:18:46.0700000",
        "Processed": null
      },
      {
        "LeadID": "15",
        "Retailer": "1",
        "FirstName": "fdasf",
        "LastName": "fa",
        "Email": "yllom126@hotmail.com",
        "ContactPhone": "2528555555",
        "ContactBusinessName": "Wally's Wonderful World of Cabinets",
        "ContactPhoneExt": null,
        "StreetAddress": "asdf",
        "City": "aadsf",
        "State": "33",
        "Zip": "33333",
        "Country": "US",
        "ProjectType": "Remodel",
        "Describe": null,
        "Comments": null,
        "DistributionArea": "1",
        "Created": "2021-04-21T17:54:37.4470000",
        "Processed": null
      },
    ],
    
    leadStatusArray: [],
    dealers: [
      { 
        dealerId: 1,
        dealerName: "Forrest Gump"
      },
      {
        dealerId: 2,
        dealerName: "C. Abe Net"
      },
      {
        dealerId: 3,
        dealerName: "Josh"
      }
    ]
 
  },
  getters: {
    getOneLead: (state) => (id: string) => {
      return state.allLeadsArray.filter(obj => {
        return obj.LeadID === id
      })[0]
    },

    getUnprocessedLeads: state => {
      return state.allLeadsArray.filter(x => x.Processed == null)
    },

    getProcessedLeads: state => {
      return state.allLeadsArray.filter(x => x.Processed != null)
    },

    getFormattedDate: (state) => (date: string) => {
      const d = new Date(Date.parse(date))
      const hh: number = d.getHours();
        const m: number = d.getMinutes();
        let dd = "AM";
        let mm = "";
        let h: number = hh;    
        
        if (h >= 12) {
          h = hh - 12;
          dd = "PM";
        }
    
        if (h === 0) {
          h = 12;
        }
    
        if (m < 10) {
          mm = `0${m}`;
        } else {
          mm = String(m);
        }
           return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${h}:${mm} ${dd}`;
    }
  },
  mutations: {
    // getLeadsFromDB(state, leads) {
    //   state.allLeadsArray = leads
    // },
    
    markAsProcessed(state, payload) {
      const leadToUpdate = state.allLeadsArray.filter(obj => {
        return obj.LeadID === payload.id
      })[0];
      leadToUpdate.Processed = payload.clickTime;
    },

    markAsUnprocessed(state, lead) {
      const leadToUpdate = state.allLeadsArray.filter(obj => {
        return obj.LeadID === lead.LeadID
      })[0];
      leadToUpdate.Processed = null;
    }
  },
  actions: {
    // getLeadsFromDB({commit}) {
    //   axios.get(URL)
    //   .then(response => {
    //     commit('getAllLeads', response.data)
    //   })
    // }

    markLeadProcessed({commit}, payload) {
      //some API call
      commit('markAsProcessed', payload)
    },

    markLeadUnprocessed({commit}, lead) {
      //some API call
      commit('markAsUnprocessed', lead)
    }
  },
  modules: {
  }
})
