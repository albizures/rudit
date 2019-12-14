import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завозиться: PerfectVerb = {
  name: Word('завозиться', 5),
  singular1stPerson: Word('завожусь', 5),
  singular2ndPerson: Word('завозишься', 3),
  singular3rdPerson: Word('завозится', 3),
  plural1stPerson: Word('завозимся', 3),
  plural2ndPerson: Word('завозитесь', 3),
  plural3rdPerson: Word('завозятся', 3),
  masculinePast: Word('завозился', 5),
  femininePast: Word('завозилась', 5),
  neuterPast: Word('завозилось', 5),
  pluralPast: Word('завозились', 5),
  imperativeInformal: Word('завозись', 5),
  imperativeFormal: Word('завозитесь', 5),
  imperfect: [],
};

perfectVerbs.set(завозиться.name.text, завозиться);

export { завозиться };