import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повозиться: PerfectVerb = {
  name: Word('повозиться', 5),
  singular1stPerson: Word('повожусь', 5),
  singular2ndPerson: Word('повозишься', 3),
  singular3rdPerson: Word('повозится', 3),
  plural1stPerson: Word('повозимся', 3),
  plural2ndPerson: Word('повозитесь', 3),
  plural3rdPerson: Word('повозятся', 3),
  masculinePast: Word('повозился', 5),
  femininePast: Word('повозилась', 5),
  neuterPast: Word('повозилось', 5),
  pluralPast: Word('повозились', 5),
  imperativeInformal: Word('повозись', 5),
  imperativeFormal: Word('повозитесь', 5),
  imperfect: [],
};

perfectVerbs.set(повозиться.name.text, повозиться);

export { повозиться };