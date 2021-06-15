export default class Lead {
        leadId: Number;
        retailer: String;
        firstName: String;
        lastName: String;
        email: String;
        contactPhone: String;
        businessName: String;
        phoneExt: String;
        address: String;
        city: String;
        state: String;
        zip: String;
        country: String;
        projectType: String;
        describe: String; 
        comments: String;
        distribution: String; 
        created: Date;
        processed: Date
    constructor(leadId: number, retailer: string, firstName: string, lastnName: string, email: string, contactPhone: string, businessName: string, phoneExt: string, address: string, city: string, state: string, zip: string, country: string, projectType: String, describe: String, comments: String, distribution: String, created: Date, processed: Date) {
        this.leadId = leadId
        this.retailer = retailer
        this.firstName = firstName
        this.lastName = lastnName
        this.email = email
        this.contactPhone = contactPhone
        this.businessName = businessName
        this.phoneExt = phoneExt
        this.address = address
        this.city = city
        this.state = state
        this.zip = zip
        this.country = country
        this.projectType = projectType
        this.describe = describe
        this.comments = comments
        this.distribution = distribution
        this.created = created
        this.processed = processed
    }
  }