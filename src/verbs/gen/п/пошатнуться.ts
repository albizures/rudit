import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошатнуться: PerfectVerb = {
  name: Word('пошатнуться', 6),
  singular1stPerson: Word('пошатнусь', 6),
  singular2ndPerson: Word('пошатнёшься', 3),
  singular3rdPerson: Word('пошатнётся', 3),
  plural1stPerson: Word('пошатнёмся', 3),
  plural2ndPerson: Word('пошатнётесь', 3),
  plural3rdPerson: Word('пошатнутся', 6),
  masculinePast: Word('пошатнулся', 6),
  femininePast: Word('пошатнулась', 6),
  neuterPast: Word('пошатнулось', 6),
  pluralPast: Word('пошатнулись', 6),
  imperativeInformal: Word('пошатнись', 6),
  imperativeFormal: Word('пошатнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(пошатнуться.name.text, пошатнуться);

export { пошатнуться };