import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const субстантивироваться: PerfectVerb = {
  name: Word('субстантивироваться', 10),
  singular1stPerson: Word('субстантивируюсь', 10),
  singular2ndPerson: Word('субстантивируешься', 10),
  singular3rdPerson: Word('субстантивируется', 10),
  plural1stPerson: Word('субстантивируемся', 10),
  plural2ndPerson: Word('субстантивируетесь', 10),
  plural3rdPerson: Word('субстантивируются', 10),
  masculinePast: Word('субстантивировался', 10),
  femininePast: Word('субстантивировалась', 10),
  neuterPast: Word('субстантивировалось', 10),
  pluralPast: Word('субстантивировались', 10),
  imperativeInformal: Word('субстантивируйся', 10),
  imperativeFormal: Word('субстантивируйтесь', 10),
  imperfect: [],
};

perfectVerbs.set(субстантивироваться.name.text, субстантивироваться);

export { субстантивироваться };