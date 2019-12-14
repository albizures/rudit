import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осердиться: PerfectVerb = {
  name: Word('осердиться', 5),
  singular1stPerson: Word('осержусь', 5),
  singular2ndPerson: Word('осердишься', 2),
  singular3rdPerson: Word('осердится', 2),
  plural1stPerson: Word('осердимся', 2),
  plural2ndPerson: Word('осердитесь', 2),
  plural3rdPerson: Word('осердятся', 2),
  masculinePast: Word('осердился', 5),
  femininePast: Word('осердилась', 5),
  neuterPast: Word('осердилось', 5),
  pluralPast: Word('осердились', 5),
  imperativeInformal: Word('осердись', 5),
  imperativeFormal: Word('осердитесь', 5),
  imperfect: [],
};

perfectVerbs.set(осердиться.name.text, осердиться);

export { осердиться };