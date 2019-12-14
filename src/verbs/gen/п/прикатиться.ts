import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикатиться: PerfectVerb = {
  name: Word('прикатиться', 6),
  singular1stPerson: Word('прикачусь', 6),
  singular2ndPerson: Word('прикатишься', 4),
  singular3rdPerson: Word('прикатится', 4),
  plural1stPerson: Word('прикатимся', 4),
  plural2ndPerson: Word('прикатитесь', 4),
  plural3rdPerson: Word('прикатятся', 4),
  masculinePast: Word('прикатился', 6),
  femininePast: Word('прикатилась', 6),
  neuterPast: Word('прикатилось', 6),
  pluralPast: Word('прикатились', 6),
  imperativeInformal: Word('прикатись', 6),
  imperativeFormal: Word('прикатитесь', 6),
  imperfect: [],
};

perfectVerbs.set(прикатиться.name.text, прикатиться);

export { прикатиться };