import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зваться: PerfectVerb = {
  name: Word('зваться', 2),
  singular1stPerson: Word('зовусь', 3),
  singular2ndPerson: Word('зовёшься', 3),
  singular3rdPerson: Word('зовётся', 3),
  plural1stPerson: Word('зовёмся', 3),
  plural2ndPerson: Word('зовётесь', 3),
  plural3rdPerson: Word('зовутся', 3),
  masculinePast: Word('звался', 2),
  femininePast: Word('звалась', 4),
  neuterPast: Word('звалось//звало'сь', 2),
  pluralPast: Word('звались//звали'сь', 2),
  imperativeInformal: Word('зовись', 3),
  imperativeFormal: Word('зовитесь', 3),
  imperfect: [],
};

perfectVerbs.set(зваться.name.text, зваться);

export { зваться };