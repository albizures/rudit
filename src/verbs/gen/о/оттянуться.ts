import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттянуться: PerfectVerb = {
  name: Word('оттянуться', 5),
  singular1stPerson: Word('оттянусь', 5),
  singular2ndPerson: Word('оттянешься', 3),
  singular3rdPerson: Word('оттянется', 3),
  plural1stPerson: Word('оттянемся', 3),
  plural2ndPerson: Word('оттянетесь', 3),
  plural3rdPerson: Word('оттянутся', 3),
  masculinePast: Word('оттянулся', 5),
  femininePast: Word('оттянулась', 5),
  neuterPast: Word('оттянулось', 5),
  pluralPast: Word('оттянулись', 5),
  imperativeInformal: Word('оттянись', 5),
  imperativeFormal: Word('оттянитесь', 5),
  imperfect: [],
};

perfectVerbs.set(оттянуться.name.text, оттянуться);

export { оттянуться };