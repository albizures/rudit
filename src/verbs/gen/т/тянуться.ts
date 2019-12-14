import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тянуться: PerfectVerb = {
  name: Word('тянуться', 3),
  singular1stPerson: Word('тянусь', 3),
  singular2ndPerson: Word('тянешься', 1),
  singular3rdPerson: Word('тянется', 1),
  plural1stPerson: Word('тянемся', 1),
  plural2ndPerson: Word('тянетесь', 1),
  plural3rdPerson: Word('тянутся', 1),
  masculinePast: Word('тянулся', 3),
  femininePast: Word('тянулась', 3),
  neuterPast: Word('тянулось', 3),
  pluralPast: Word('тянулись', 3),
  imperativeInformal: Word('тянись', 3),
  imperativeFormal: Word('тянитесь', 3),
  imperfect: ['потянуться','протянуться'],
};

perfectVerbs.set(тянуться.name.text, тянуться);

export { тянуться };