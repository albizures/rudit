import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тащиться: PerfectVerb = {
  name: Word('тащиться', 3),
  singular1stPerson: Word('тащусь', 3),
  singular2ndPerson: Word('тащишься', 1),
  singular3rdPerson: Word('тащится', 1),
  plural1stPerson: Word('тащимся', 1),
  plural2ndPerson: Word('тащитесь', 1),
  plural3rdPerson: Word('тащатся', 1),
  masculinePast: Word('тащился', 3),
  femininePast: Word('тащилась', 3),
  neuterPast: Word('тащилось', 3),
  pluralPast: Word('тащились', 3),
  imperativeInformal: Word('тащись', 3),
  imperativeFormal: Word('тащитесь', 3),
  imperfect: [],
};

perfectVerbs.set(тащиться.name.text, тащиться);

export { тащиться };