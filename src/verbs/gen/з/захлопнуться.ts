import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захлопнуться: PerfectVerb = {
  name: Word('захлопнуться', 4),
  singular1stPerson: Word('захлопнусь', 4),
  singular2ndPerson: Word('захлопнешься', 4),
  singular3rdPerson: Word('захлопнется', 4),
  plural1stPerson: Word('захлопнемся', 4),
  plural2ndPerson: Word('захлопнетесь', 4),
  plural3rdPerson: Word('захлопнутся', 4),
  masculinePast: Word('захлопнулся', 4),
  femininePast: Word('захлопнулась', 4),
  neuterPast: Word('захлопнулось', 4),
  pluralPast: Word('захлопнулись', 4),
  imperativeInformal: Word('захлопнись', 4),
  imperativeFormal: Word('захлопнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(захлопнуться.name.text, захлопнуться);

export { захлопнуться };