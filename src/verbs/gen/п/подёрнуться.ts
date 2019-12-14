import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подёрнуться: PerfectVerb = {
  name: Word('подёрнуться', 3),
  singular1stPerson: Word('подёрнусь', 3),
  singular2ndPerson: Word('подёрнешься', 3),
  singular3rdPerson: Word('подёрнется', 3),
  plural1stPerson: Word('подёрнемся', 3),
  plural2ndPerson: Word('подёрнетесь', 3),
  plural3rdPerson: Word('подёрнутся', 3),
  masculinePast: Word('подёрнулся', 3),
  femininePast: Word('подёрнулась', 3),
  neuterPast: Word('подёрнулось', 3),
  pluralPast: Word('подёрнулись', 3),
  imperativeInformal: Word('подёрнись', 3),
  imperativeFormal: Word('подёрнитесь', 3),
  imperfect: [],
};

perfectVerbs.set(подёрнуться.name.text, подёрнуться);

export { подёрнуться };