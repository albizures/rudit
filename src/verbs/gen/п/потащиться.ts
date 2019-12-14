import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потащиться: PerfectVerb = {
  name: Word('потащиться', 5),
  singular1stPerson: Word('потащусь', 5),
  singular2ndPerson: Word('потащишься', 3),
  singular3rdPerson: Word('потащится', 3),
  plural1stPerson: Word('потащимся', 3),
  plural2ndPerson: Word('потащитесь', 3),
  plural3rdPerson: Word('потащатся', 3),
  masculinePast: Word('потащился', 5),
  femininePast: Word('потащилась', 5),
  neuterPast: Word('потащилось', 5),
  pluralPast: Word('потащились', 5),
  imperativeInformal: Word('потащись', 5),
  imperativeFormal: Word('потащитесь', 5),
  imperfect: [],
};

perfectVerbs.set(потащиться.name.text, потащиться);

export { потащиться };