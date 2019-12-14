import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застыдиться: PerfectVerb = {
  name: Word('застыдиться', 6),
  singular1stPerson: Word('застыжусь', 6),
  singular2ndPerson: Word('застыдишься', 6),
  singular3rdPerson: Word('застыдится', 6),
  plural1stPerson: Word('застыдимся', 6),
  plural2ndPerson: Word('застыдитесь', 6),
  plural3rdPerson: Word('застыдятся', 6),
  masculinePast: Word('застыдился', 6),
  femininePast: Word('застыдилась', 6),
  neuterPast: Word('застыдилось', 6),
  pluralPast: Word('застыдились', 6),
  imperativeInformal: Word('застыдись', 6),
  imperativeFormal: Word('застыдитесь', 6),
  imperfect: [],
};

perfectVerbs.set(застыдиться.name.text, застыдиться);

export { застыдиться };