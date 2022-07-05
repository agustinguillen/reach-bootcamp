'reach 0.1';

const Player = {
  getChallenge: Fun([], UInt),
  seeResult: Fun([UInt], Null),
};

export const main = Reach.App(() => {
  const Pat = Participant('Pat', {
    ...Player,
    wager: UInt,
  });
  const Vanna   = Participant('Vanna', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  Pat.only(() => {
    const challengePat = declassify(interact.getChallenge())
  })
  Pat.publish(challengePat)
  commit()

  Vanna.only(()=> {
    const challengeVanna = declassify(interact.getChallenge())
  })
  Vanna.publish(challengeVanna)
  commit()

  const outCome = (challengePat >= challengeVanna ? challengePat === challengeVanna ? 1 : 2 : 0)

  each([Pat, Vanna], () => {
    interact.seeResult(outCome)
  })

})