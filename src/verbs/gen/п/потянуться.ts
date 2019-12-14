import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потянуться: PerfectVerb = {
  name: Word('потянуться', 5),
  singular1stPerson: Word('потянусь', 5),
  singular2ndPerson: Word('потянешься', 3),
  singular3rdPerson: Word('потянется', 3),
  plural1stPerson: Word('потянемся', 3),
  plural2ndPerson: Word('потянетесь', 3),
  plural3rdPerson: Word('потянутся', 3),
  masculinePast: Word('потянулся', 5),
  femininePast: Word('потянулась', 5),
  neuterPast: Word('потянулось', 5),
  pluralPast: Word('потянулись', 5),
  imperativeInformal: Word('потянись', 5),
  imperativeFormal: Word('потянитесь', 5),
  imperfect: [],
};

perfectVerbs.set(потянуться.name.text, потянуться);

export { потянуться };