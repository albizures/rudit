import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкатиться: PerfectVerb = {
  name: Word('подкатиться', 6),
  singular1stPerson: Word('подкачусь', 6),
  singular2ndPerson: Word('подкатишься', 4),
  singular3rdPerson: Word('подкатится', 4),
  plural1stPerson: Word('подкатимся', 4),
  plural2ndPerson: Word('подкатитесь', 4),
  plural3rdPerson: Word('подкатятся', 4),
  masculinePast: Word('подкатился', 6),
  femininePast: Word('подкатилась', 6),
  neuterPast: Word('подкатилось', 6),
  pluralPast: Word('подкатились', 6),
  imperativeInformal: Word('подкатись', 6),
  imperativeFormal: Word('подкатитесь', 6),
  imperfect: [],
};

perfectVerbs.set(подкатиться.name.text, подкатиться);

export { подкатиться };