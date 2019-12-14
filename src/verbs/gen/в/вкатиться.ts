import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкатиться: PerfectVerb = {
  name: Word('вкатиться', 4),
  singular1stPerson: Word('вкачусь', 4),
  singular2ndPerson: Word('вкатишься', 2),
  singular3rdPerson: Word('вкатится', 2),
  plural1stPerson: Word('вкатимся', 2),
  plural2ndPerson: Word('вкатитесь', 2),
  plural3rdPerson: Word('вкатятся', 2),
  masculinePast: Word('вкатился', 4),
  femininePast: Word('вкатилась', 4),
  neuterPast: Word('вкатилось', 4),
  pluralPast: Word('вкатились', 4),
  imperativeInformal: Word('вкатись', 4),
  imperativeFormal: Word('вкатитесь', 4),
  imperfect: [],
};

perfectVerbs.set(вкатиться.name.text, вкатиться);

export { вкатиться };