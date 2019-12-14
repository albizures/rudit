import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const споткнуться: PerfectVerb = {
  name: Word('споткнуться', 6),
  singular1stPerson: Word('споткнусь', 6),
  singular2ndPerson: Word('споткнёшься', 2),
  singular3rdPerson: Word('споткнётся', 2),
  plural1stPerson: Word('споткнёмся', 2),
  plural2ndPerson: Word('споткнётесь', 8),
  plural3rdPerson: Word('споткнутся', 6),
  masculinePast: Word('споткнулся', 6),
  femininePast: Word('споткнулась', 6),
  neuterPast: Word('споткнулось', 6),
  pluralPast: Word('споткнулись', 6),
  imperativeInformal: Word('споткнись', 6),
  imperativeFormal: Word('споткнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(споткнуться.name.text, споткнуться);

export { споткнуться };