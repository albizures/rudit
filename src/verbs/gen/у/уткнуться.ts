import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уткнуться: PerfectVerb = {
  name: Word('уткнуться', 4),
  singular1stPerson: Word('уткнусь', 4),
  singular2ndPerson: Word('уткнёшься', 4),
  singular3rdPerson: Word('уткнётся', 4),
  plural1stPerson: Word('уткнёмся', 4),
  plural2ndPerson: Word('уткнётесь', 4),
  plural3rdPerson: Word('уткнутся', 4),
  masculinePast: Word('уткнулся', 4),
  femininePast: Word('уткнулась', 4),
  neuterPast: Word('уткнулось', 4),
  pluralPast: Word('уткнулись', 4),
  imperativeInformal: Word('уткнись', 4),
  imperativeFormal: Word('уткнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(уткнуться.name.text, уткнуться);

export { уткнуться };