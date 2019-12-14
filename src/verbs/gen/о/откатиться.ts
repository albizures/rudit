import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откатиться: PerfectVerb = {
  name: Word('откатиться', 5),
  singular1stPerson: Word('откачусь', 5),
  singular2ndPerson: Word('откатишься', 3),
  singular3rdPerson: Word('откатится', 3),
  plural1stPerson: Word('откатимся', 3),
  plural2ndPerson: Word('откатитесь', 3),
  plural3rdPerson: Word('откатятся', 3),
  masculinePast: Word('откатился', 5),
  femininePast: Word('откатилась', 5),
  neuterPast: Word('откатилось', 5),
  pluralPast: Word('откатились', 5),
  imperativeInformal: Word('откатись', 5),
  imperativeFormal: Word('откатитесь', 5),
  imperfect: [],
};

perfectVerbs.set(откатиться.name.text, откатиться);

export { откатиться };