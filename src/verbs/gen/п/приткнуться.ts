import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приткнуться: PerfectVerb = {
  name: Word('приткнуться', 6),
  singular1stPerson: Word('приткнусь', 6),
  singular2ndPerson: Word('приткнёшься', 2),
  singular3rdPerson: Word('приткнётся', 2),
  plural1stPerson: Word('приткнёмся', 2),
  plural2ndPerson: Word('приткнётесь', 8),
  plural3rdPerson: Word('приткнутся', 6),
  masculinePast: Word('приткнулся', 6),
  femininePast: Word('приткнулась', 6),
  neuterPast: Word('приткнулось', 6),
  pluralPast: Word('приткнулись', 6),
  imperativeInformal: Word('приткнись', 6),
  imperativeFormal: Word('приткнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(приткнуться.name.text, приткнуться);

export { приткнуться };