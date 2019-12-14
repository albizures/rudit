import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегнуться: PerfectVerb = {
  name: Word('перегнуться', 6),
  singular1stPerson: Word('перегнусь', 6),
  singular2ndPerson: Word('перегнёшься', 1),
  singular3rdPerson: Word('перегнётся', 1),
  plural1stPerson: Word('перегнёмся', 1),
  plural2ndPerson: Word('перегнётесь', 1),
  plural3rdPerson: Word('перегнутся', 6),
  masculinePast: Word('перегнулся', 6),
  femininePast: Word('перегнулась', 6),
  neuterPast: Word('перегнулось', 6),
  pluralPast: Word('перегнулись', 6),
  imperativeInformal: Word('перегнись', 6),
  imperativeFormal: Word('перегнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(перегнуться.name.text, перегнуться);

export { перегнуться };