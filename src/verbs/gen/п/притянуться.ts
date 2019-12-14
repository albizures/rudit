import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притянуться: PerfectVerb = {
  name: Word('притянуться', 6),
  singular1stPerson: Word('притянусь', 6),
  singular2ndPerson: Word('притянешься', 4),
  singular3rdPerson: Word('притянется', 4),
  plural1stPerson: Word('притянемся', 4),
  plural2ndPerson: Word('притянетесь', 4),
  plural3rdPerson: Word('притянутся', 4),
  masculinePast: Word('притянулся', 6),
  femininePast: Word('притянулась', 6),
  neuterPast: Word('притянулось', 6),
  pluralPast: Word('притянулись', 6),
  imperativeInformal: Word('притянись', 6),
  imperativeFormal: Word('притянитесь', 6),
  imperfect: [],
};

perfectVerbs.set(притянуться.name.text, притянуться);

export { притянуться };