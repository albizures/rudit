import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тщиться: PerfectVerb = {
  name: Word('тщиться', 2),
  singular1stPerson: Word('тщусь', 2),
  singular2ndPerson: Word('тщишься', 2),
  singular3rdPerson: Word('тщится', 2),
  plural1stPerson: Word('тщимся', 2),
  plural2ndPerson: Word('тщитесь', 2),
  plural3rdPerson: Word('тщатся', 2),
  masculinePast: Word('тщился', 2),
  femininePast: Word('тщилась', 2),
  neuterPast: Word('тщилось', 2),
  pluralPast: Word('тщились', 2),
  imperativeInformal: Word('тщись', 2),
  imperativeFormal: Word('тщитесь', 2),
  imperfect: [],
};

perfectVerbs.set(тщиться.name.text, тщиться);

export { тщиться };