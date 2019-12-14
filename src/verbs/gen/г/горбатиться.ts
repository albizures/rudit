import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const горбатиться: PerfectVerb = {
  name: Word('горбатиться', 4),
  singular1stPerson: Word('горбачусь', 4),
  singular2ndPerson: Word('горбатишься', 4),
  singular3rdPerson: Word('горбатится', 4),
  plural1stPerson: Word('горбатимся', 4),
  plural2ndPerson: Word('горбатитесь', 4),
  plural3rdPerson: Word('горбатятся', 4),
  masculinePast: Word('горбатился', 4),
  femininePast: Word('горбатилась', 4),
  neuterPast: Word('горбатилось', 4),
  pluralPast: Word('горбатились', 4),
  imperativeInformal: Word('горбаться', 4),
  imperativeFormal: Word('горбатьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(горбатиться.name.text, горбатиться);

export { горбатиться };