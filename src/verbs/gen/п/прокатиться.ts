import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокатиться: PerfectVerb = {
  name: Word('прокатиться', 6),
  singular1stPerson: Word('прокачусь', 6),
  singular2ndPerson: Word('прокатишься', 4),
  singular3rdPerson: Word('прокатится', 4),
  plural1stPerson: Word('прокатимся', 4),
  plural2ndPerson: Word('прокатитесь', 4),
  plural3rdPerson: Word('прокатятся', 4),
  masculinePast: Word('прокатился', 6),
  femininePast: Word('прокатилась', 6),
  neuterPast: Word('прокатилось', 6),
  pluralPast: Word('прокатились', 6),
  imperativeInformal: Word('прокатись', 6),
  imperativeFormal: Word('прокатитесь', 6),
  imperfect: [],
};

perfectVerbs.set(прокатиться.name.text, прокатиться);

export { прокатиться };