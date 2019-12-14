import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стянуться: PerfectVerb = {
  name: Word('стянуться', 4),
  singular1stPerson: Word('стянусь', 4),
  singular2ndPerson: Word('стянешься', 2),
  singular3rdPerson: Word('стянется', 2),
  plural1stPerson: Word('стянемся', 2),
  plural2ndPerson: Word('стянетесь', 2),
  plural3rdPerson: Word('стянутся', 2),
  masculinePast: Word('стянулся', 4),
  femininePast: Word('стянулась', 4),
  neuterPast: Word('стянулось', 4),
  pluralPast: Word('стянулись', 4),
  imperativeInformal: Word('стянись', 4),
  imperativeFormal: Word('стянитесь', 4),
  imperfect: [],
};

perfectVerbs.set(стянуться.name.text, стянуться);

export { стянуться };