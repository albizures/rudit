import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всколыхнуться: PerfectVerb = {
  name: Word('всколыхнуться', 8),
  singular1stPerson: Word('всколыхнусь', 8),
  singular2ndPerson: Word('всколыхнёшься', 8),
  singular3rdPerson: Word('всколыхнётся', 8),
  plural1stPerson: Word('всколыхнёмся', 8),
  plural2ndPerson: Word('всколыхнётесь', 8),
  plural3rdPerson: Word('всколыхнутся', 8),
  masculinePast: Word('всколыхнулся', 8),
  femininePast: Word('всколыхнулась', 8),
  neuterPast: Word('всколыхнулось', 8),
  pluralPast: Word('всколыхнулись', 8),
  imperativeInformal: Word('всколыхнись', 8),
  imperativeFormal: Word('всколыхнитесь', 8),
  imperfect: [],
};

perfectVerbs.set(всколыхнуться.name.text, всколыхнуться);

export { всколыхнуться };