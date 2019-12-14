import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкатиться: PerfectVerb = {
  name: Word('выкатиться', 1),
  singular1stPerson: Word('выкачусь', 1),
  singular2ndPerson: Word('выкатишься', 1),
  singular3rdPerson: Word('выкатится', 1),
  plural1stPerson: Word('выкатимся', 1),
  plural2ndPerson: Word('выкатитесь', 1),
  plural3rdPerson: Word('выкатятся', 1),
  masculinePast: Word('выкатился', 1),
  femininePast: Word('выкатилась', 1),
  neuterPast: Word('выкатилось', 1),
  pluralPast: Word('выкатились', 1),
  imperativeInformal: Word('выкатись', 1),
  imperativeFormal: Word('выкатитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выкатиться.name.text, выкатиться);

export { выкатиться };