import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приволокнуться: PerfectVerb = {
  name: Word('приволокнуться', 9),
  singular1stPerson: Word('приволокнусь', 9),
  singular2ndPerson: Word('приволокнёшься', 9),
  singular3rdPerson: Word('приволокнётся', 9),
  plural1stPerson: Word('приволокнёмся', 9),
  plural2ndPerson: Word('приволокнётесь', 9),
  plural3rdPerson: Word('приволокнутся', 9),
  masculinePast: Word('приволокнулся', 9),
  femininePast: Word('приволокнулась', 9),
  neuterPast: Word('приволокнулось', 9),
  pluralPast: Word('приволокнулись', 9),
  imperativeInformal: Word('приволокнись', 9),
  imperativeFormal: Word('приволокнитесь', 9),
  imperfect: [],
};

perfectVerbs.set(приволокнуться.name.text, приволокнуться);

export { приволокнуться };