'reach 0.1';

const participant = {
   seePrice: Fun([], UInt),
   getDescription: Fun([], Bytes(1)),
};

export const main = Reach.App(() => {
  const Creator = Participant('Creator', {
    ...participant,
  });

  const Bidder = Participant('Bidder', {
    ...participant,
    payment: UInt,
  });

  const Buyer = Participant('Buyer', {
    ...participant,
    acceptPayment: Fun([UInt], Null),
  });
  init();

  Bidder.only(() => {
    const payment= declassify(interact.payment);
    const price = declassify(interact.seePrice());
  });
  
  Bidder.publish(price, payment)
    .pay(payment);
  commit();

  Buyer.only(()=> {
    interact.acceptPayment(payment);
    const description = declassify(interact.getDescription())
  });
  Buyer.publish(description)
    .pay(payment);

  commit();

});