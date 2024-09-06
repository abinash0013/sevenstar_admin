const mainUrl = process.env.REACT_APP_API_URL;
// const mainUrl = `http://localhost:8000`;

const base = {
  adminLogin: `${mainUrl}/adminLogin`,
  saveAgent: `${mainUrl}/saveAgent`,
  agentsList: `${mainUrl}/agentsList`,
  editAgent: `${mainUrl}/editAgent`,
  deleteAgent: `${mainUrl}/deleteAgent`,
  saveUser: `${mainUrl}/saveUser`,
  usersList: `${mainUrl}/usersList`,
  editUser: `${mainUrl}/editUser`,
  deleteUser: `${mainUrl}/deleteUser`,
  // saveTicket: `${mainUrl}/saveTicket`,
  // ticketList: `${mainUrl}/ticketList`,
  // editTicket: `${mainUrl}/editTicket`,
  // deleteTicket: `${mainUrl}/deleteTicket`,
  ticketCardView: `${mainUrl}/ticketCardView`,
  gameList: `${mainUrl}/gameList`,
  saveGame: `${mainUrl}/saveGame`,
  editGame: `${mainUrl}/editGame`,
  saveAnnouncement: `${mainUrl}/saveAnnouncement`,
  announcementList: `${mainUrl}/announcementList`,
  editAnnouncement: `${mainUrl}/editAnnouncement`,
  deleteAnnouncement: `${mainUrl}/deleteAnnouncement`,
  disclaimerList: `${mainUrl}/disclaimerList`,
  editDisclaimer: `${mainUrl}/editDisclaimer`,
  aboutList: `${mainUrl}/aboutList`,
  editAbout: `${mainUrl}/editAbout`,
  feedbackList: `${mainUrl}/feedbackList`,
  deleteFeedback: `${mainUrl}/deleteFeedback`,
  agentDetails: `${mainUrl}/agentDetails`,
  agentPaidAmount: `${mainUrl}/agentPaidAmount`,
  agentCreditDebitTransacationList: `${mainUrl}/agentCreditDebitTransacationList`,
  walletAction: `${mainUrl}/walletAction`,
  startGame: `${mainUrl}/matchedTicketForBooking`,
  acceptTransactionRequest: `${mainUrl}/acceptTransactionRequest`,
  deductMoneyFromAgentWallet: `${mainUrl}/deductMoneyFromAgentWallet`,
}
export { base }
