import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const громоздиться: PerfectVerb = {
  name: Word('громоздиться', 7),
  singular1stPerson: Word('громозжусь', 7),
  singular2ndPerson: Word('громоздишься', 7),
  singular3rdPerson: Word('громоздится', 7),
  plural1stPerson: Word('громоздимся', 7),
  plural2ndPerson: Word('громоздитесь', 7),
  plural3rdPerson: Word('громоздятся', 7),
  masculinePast: Word('громоздился', 7),
  femininePast: Word('громоздилась', 7),
  neuterPast: Word('громоздилось', 7),
  pluralPast: Word('громоздились', 7),
  imperativeInformal: Word('громоздись', 7),
  imperativeFormal: Word('громоздитесь', 7),
  imperfect: [],
};

perfectVerbs.set(громоздиться.name.text, громоздиться);

export { громоздиться };