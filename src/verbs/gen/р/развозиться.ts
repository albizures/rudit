import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развозиться: PerfectVerb = {
  name: Word('развозиться', 6),
  singular1stPerson: Word('развожусь', 6),
  singular2ndPerson: Word('развозишься', 4),
  singular3rdPerson: Word('развозится', 4),
  plural1stPerson: Word('развозимся', 4),
  plural2ndPerson: Word('развозитесь', 4),
  plural3rdPerson: Word('развозятся', 4),
  masculinePast: Word('развозился', 6),
  femininePast: Word('развозилась', 6),
  neuterPast: Word('развозилось', 6),
  pluralPast: Word('развозились', 6),
  imperativeInformal: Word('развозись', 6),
  imperativeFormal: Word('развозитесь', 6),
  imperfect: [],
};

perfectVerbs.set(развозиться.name.text, развозиться);

export { развозиться };