import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подогнуться: PerfectVerb = {
  name: Word('подогнуться', 6),
  singular1stPerson: Word('подогнусь', 6),
  singular2ndPerson: Word('подогнёшься', 6),
  singular3rdPerson: Word('подогнётся', 6),
  plural1stPerson: Word('подогнёмся', 6),
  plural2ndPerson: Word('подогнётесь', 6),
  plural3rdPerson: Word('подогнутся', 6),
  masculinePast: Word('подогнулся', 6),
  femininePast: Word('подогнулась', 6),
  neuterPast: Word('подогнулось', 6),
  pluralPast: Word('подогнулись', 6),
  imperativeInformal: Word('подогнись', 6),
  imperativeFormal: Word('подогнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(подогнуться.name.text, подогнуться);

export { подогнуться };