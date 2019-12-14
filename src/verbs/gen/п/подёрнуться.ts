import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подёрнуться: PerfectVerb = {
  name: Word('подёрнуться', 1),
  singular1stPerson: Word('подёрнусь', 1),
  singular2ndPerson: Word('подёрнешься', 6),
  singular3rdPerson: Word('подёрнется', 6),
  plural1stPerson: Word('подёрнемся', 6),
  plural2ndPerson: Word('подёрнетесь', 6),
  plural3rdPerson: Word('подёрнутся', 1),
  masculinePast: Word('подёрнулся', 1),
  femininePast: Word('подёрнулась', 8),
  neuterPast: Word('подёрнулось', 1),
  pluralPast: Word('подёрнулись', 8),
  imperativeInformal: Word('подёрнись', 6),
  imperativeFormal: Word('подёрнитесь', 8),
  imperfect: [],
};

perfectVerbs.set(подёрнуться.name.text, подёрнуться);

export { подёрнуться };