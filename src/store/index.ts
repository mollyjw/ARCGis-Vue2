import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    leadsArray: [],
    assignedArray: [],
    unassignedArray: [
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
    getOneRequest: (state) => (id: string) => {
      return state.unassignedArray.filter(obj => {
        return obj.LeadID === id
      })[0]
    }
  },
  mutations: {
  
  },
  actions: {
    
  },
  modules: {
  }
})
