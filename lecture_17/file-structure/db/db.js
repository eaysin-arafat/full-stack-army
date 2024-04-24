const Ticket = require("../models/Ticket");

class MyDb {
  constructor() {
    this.tickets = [];
  }

  /**
   * create and save a new ticket
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} return a ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);

    return ticket;
  }

  /**
   * create multiple ticket for a single user
   * @param {string} username
   * @param {number}  price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  /**
   * return all availabel tickets
   */
  find() {
    return this.tickets;
  }

  /**
   * find ticket by ticket id
   * @param {string} ticketId
   * @returns {Ticket}
   */
  findById(ticketId) {
    return this.tickets.find(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );
  }

  /**
   * find all tickets for a given user
   * @param {string} username
   * @returns {Array<Ticket>}
   */
  findByUsername(username) {
    return (tickets = this.tickets.filter(
      /**@param {Ticket} ticket */

      (ticket) => (ticket.username = username)
    ));
  }

  /**
   *
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   * @returns {Ticket}
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updatedAt = new Date();

    return ticket;
  }

  /**
   *
   * @param {string} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex(
      /**@param {Ticket} ticket */
      (ticket) => ticket.id === ticketId
    );

    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   * find winners
   * @param {number} winderCount
   * @returns {Array<Ticket>}
   */
  draw(winderCount) {
    let winerIndexes = new Array(winderCount);

    let index = 0;

    while (index < winderCount) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);
      if (!winerIndexes.includes(winnerIndex)) {
        winerIndexes[index++] = winnerIndex;
        continue;
      }
    }

    return winerIndexes.map((index) => this.tickets[index]);
  }
}

const myDb = new MyDb();
module.exports = myDb;
