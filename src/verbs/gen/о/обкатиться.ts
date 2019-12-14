import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкатиться: PerfectVerb = {
  name: Word('обкатиться', 5),
  singular1stPerson: Word('обкачусь', 5),
  singular2ndPerson: Word('обкатишься', 3),
  singular3rdPerson: Word('обкатится', 3),
  plural1stPerson: Word('обкатимся', 3),
  plural2ndPerson: Word('обкатитесь', 3),
  plural3rdPerson: Word('обкатятся', 3),
  masculinePast: Word('обкатился', 5),
  femininePast: Word('обкатилась', 5),
  neuterPast: Word('обкатилось', 5),
  pluralPast: Word('обкатились', 5),
  imperativeInformal: Word('обкатись', 5),
  imperativeFormal: Word('обкатитесь', 5),
  imperfect: [],
};

perfectVerbs.set(обкатиться.name.text, обкатиться);

export { обкатиться };