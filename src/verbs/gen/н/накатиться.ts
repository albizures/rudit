import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накатиться: PerfectVerb = {
  name: Word('накатиться', 5),
  singular1stPerson: Word('накачусь', 5),
  singular2ndPerson: Word('накатишься', 3),
  singular3rdPerson: Word('накатится', 3),
  plural1stPerson: Word('накатимся', 3),
  plural2ndPerson: Word('накатитесь', 3),
  plural3rdPerson: Word('накатятся', 3),
  masculinePast: Word('накатился', 5),
  femininePast: Word('накатилась', 5),
  neuterPast: Word('накатилось', 5),
  pluralPast: Word('накатились', 5),
  imperativeInformal: Word('накатись', 5),
  imperativeFormal: Word('накатитесь', 5),
  imperfect: [],
};

perfectVerbs.set(накатиться.name.text, накатиться);

export { накатиться };