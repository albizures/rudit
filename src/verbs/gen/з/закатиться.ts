import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закатиться: PerfectVerb = {
  name: Word('закатиться', 5),
  singular1stPerson: Word('закачусь', 5),
  singular2ndPerson: Word('закатишься', 3),
  singular3rdPerson: Word('закатится', 3),
  plural1stPerson: Word('закатимся', 3),
  plural2ndPerson: Word('закатитесь', 3),
  plural3rdPerson: Word('закатятся', 3),
  masculinePast: Word('закатился', 5),
  femininePast: Word('закатилась', 5),
  neuterPast: Word('закатилось', 5),
  pluralPast: Word('закатились', 5),
  imperativeInformal: Word('закатись', 5),
  imperativeFormal: Word('закатитесь', 5),
  imperfect: [],
};

perfectVerbs.set(закатиться.name.text, закатиться);

export { закатиться };