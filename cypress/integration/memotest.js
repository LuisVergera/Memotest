/// <reference types="Cypress" />

const URL = "http://192.168.56.1:8080";
const CARDS_NUMBER = 12;

context("Memotest", () => {
  before(() => {
    cy.visit(URL);
  });
  it("makes sure there is a board with cards", () => {
    cy.get(".grid").find(".cards").should("have.length", CARDS_NUMBER);
  });
  it("verify that cards get attribute data-id", () => {
    cy.get(".cards").should("have.attr", "data-id");
  });
  it("verify that cards can be clicked", () => {
    cy.get(".cards").click({ multiple: true });
  });
  it("makes sure cards are random", () => {
    cy.get(".cards").then((cards) => {
      let originalSrc = [];
      cards.each(function (i, card) {
        originalSrc.push(card.src);
      });

      cy.visit(URL);

      let newSrc = [];
      cy.get(".cards").then((newCards) => {
        newCards.each(function (i, card) {
          newSrc.push(card.src);
        });
        cy.wrap(originalSrc).should("not.deep.equal", newSrc);
      });
    });
  });
  describe("resolve game", () => {
    let pairMap, pairList;
    it("pick a wrong combination", () => {
      cy.get(".cards").then((cards) => {
        pairMap = ObtainCardPair(cards);
        pairList = Object.values(pairMap);
        pairList[0][0].click();
        pairList[1][0].click();

        cy.get(".cards").should("have.length", CARDS_NUMBER);
      });
    });
  });
});

function ObtainCardPair(cards) {
  const pairs = {};

  cards.each((i, card) => {
    const cardName = card.name;

    if (pairs[cardName]) {
      pairs[cardName].push(card);
    } else {
      pairs[cardName] = [card];
    }
  });

  console.log(pairs);
  return pairs;
}
