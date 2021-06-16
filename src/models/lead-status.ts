export default class LeadStatus {
    leadStatusId: number;
    leadId: number;
    salesperson: number;
    leadClaimedBySalesperson: boolean;
    notes: string;
    dateAssigned: Date;
    dateClaimed: Date

    constructor(leadStatusId: number, leadId: number, salesperson: number, leadClaimedBySalseperson: boolean, notes: string, dateAssigned: Date, dateClaimed: Date) {
        this.leadStatusId = leadStatusId
        this.leadId = leadId
        this.salesperson =salesperson
        this.leadClaimedBySalesperson = leadClaimedBySalseperson
        this.notes = notes
        this.dateAssigned = dateAssigned
        this.dateClaimed = dateClaimed
    }
}