import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поплатиться: PerfectVerb = {
  name: Word('поплатиться', 6),
  singular1stPerson: Word('поплачусь', 6),
  singular2ndPerson: Word('поплатишься', 4),
  singular3rdPerson: Word('поплатится', 4),
  plural1stPerson: Word('поплатимся', 4),
  plural2ndPerson: Word('поплатитесь', 4),
  plural3rdPerson: Word('поплатятся', 4),
  masculinePast: Word('поплатился', 6),
  femininePast: Word('поплатилась', 6),
  neuterPast: Word('поплатилось', 6),
  pluralPast: Word('поплатились', 6),
  imperativeInformal: Word('поплатись', 6),
  imperativeFormal: Word('поплатитесь', 6),
  imperfect: [],
};

perfectVerbs.set(поплатиться.name.text, поплатиться);

export { поплатиться };