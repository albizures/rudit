import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откликнуться: PerfectVerb = {
  name: Word('откликнуться', 4),
  singular1stPerson: Word('откликнусь', 4),
  singular2ndPerson: Word('откликнешься', 4),
  singular3rdPerson: Word('откликнется', 4),
  plural1stPerson: Word('откликнемся', 4),
  plural2ndPerson: Word('откликнетесь', 4),
  plural3rdPerson: Word('откликнутся', 4),
  masculinePast: Word('откликнулся', 4),
  femininePast: Word('откликнулась', 4),
  neuterPast: Word('откликнулось', 4),
  pluralPast: Word('откликнулись', 4),
  imperativeInformal: Word('откликнись', 4),
  imperativeFormal: Word('откликнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(откликнуться.name.text, откликнуться);

export { откликнуться };