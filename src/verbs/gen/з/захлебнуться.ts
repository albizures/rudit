import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захлебнуться: PerfectVerb = {
  name: Word('захлебнуться', 7),
  singular1stPerson: Word('захлебнусь', 7),
  singular2ndPerson: Word('захлебнёшься', 1),
  singular3rdPerson: Word('захлебнётся', 1),
  plural1stPerson: Word('захлебнёмся', 1),
  plural2ndPerson: Word('захлебнётесь', 1),
  plural3rdPerson: Word('захлебнутся', 7),
  masculinePast: Word('захлебнулся', 7),
  femininePast: Word('захлебнулась', 7),
  neuterPast: Word('захлебнулось', 7),
  pluralPast: Word('захлебнулись', 7),
  imperativeInformal: Word('захлебнись', 7),
  imperativeFormal: Word('захлебнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(захлебнуться.name.text, захлебнуться);

export { захлебнуться };