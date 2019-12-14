import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтянуться: PerfectVerb = {
  name: Word('подтянуться', 6),
  singular1stPerson: Word('подтянусь', 6),
  singular2ndPerson: Word('подтянешься', 4),
  singular3rdPerson: Word('подтянется', 4),
  plural1stPerson: Word('подтянемся', 4),
  plural2ndPerson: Word('подтянетесь', 4),
  plural3rdPerson: Word('подтянутся', 4),
  masculinePast: Word('подтянулся', 6),
  femininePast: Word('подтянулась', 6),
  neuterPast: Word('подтянулось', 6),
  pluralPast: Word('подтянулись', 6),
  imperativeInformal: Word('подтянись', 6),
  imperativeFormal: Word('подтянитесь', 6),
  imperfect: [],
};

perfectVerbs.set(подтянуться.name.text, подтянуться);

export { подтянуться };