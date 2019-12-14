import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осветиться: PerfectVerb = {
  name: Word('осветиться', 5),
  singular1stPerson: Word('освещусь', 5),
  singular2ndPerson: Word('осветишься', 5),
  singular3rdPerson: Word('осветится', 5),
  plural1stPerson: Word('осветимся', 5),
  plural2ndPerson: Word('осветитесь', 5),
  plural3rdPerson: Word('осветятся', 5),
  masculinePast: Word('осветился', 5),
  femininePast: Word('осветилась', 5),
  neuterPast: Word('осветилось', 5),
  pluralPast: Word('осветились', 5),
  imperativeInformal: Word('осветись', 5),
  imperativeFormal: Word('осветитесь', 5),
  imperfect: [],
};

perfectVerbs.set(осветиться.name.text, осветиться);

export { осветиться };