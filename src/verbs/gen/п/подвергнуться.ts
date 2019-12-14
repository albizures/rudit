import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвергнуться: PerfectVerb = {
  name: Word('подвергнуться', 4),
  singular1stPerson: Word('подвергнусь', 4),
  singular2ndPerson: Word('подвергнешься', 4),
  singular3rdPerson: Word('подвергнется', 4),
  plural1stPerson: Word('подвергнемся', 4),
  plural2ndPerson: Word('подвергнетесь', 4),
  plural3rdPerson: Word('подвергнутся', 4),
  masculinePast: Word('подвергся,подве'ргнулся', 4),
  femininePast: Word('подверглась,подве'ргнулась', 4),
  neuterPast: Word('подверглось,подве'ргнулось', 4),
  pluralPast: Word('подверглись,подве'ргнулись', 4),
  imperativeInformal: Word('подвергнись', 4),
  imperativeFormal: Word('подвергнитесь', 4),
  imperfect: ['подвергаться'],
};

perfectVerbs.set(подвергнуться.name.text, подвергнуться);

export { подвергнуться };