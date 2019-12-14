import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втянуться: PerfectVerb = {
  name: Word('втянуться', 4),
  singular1stPerson: Word('втянусь', 4),
  singular2ndPerson: Word('втянешься', 2),
  singular3rdPerson: Word('втянется', 2),
  plural1stPerson: Word('втянемся', 2),
  plural2ndPerson: Word('втянетесь', 2),
  plural3rdPerson: Word('втянутся', 2),
  masculinePast: Word('втянулся', 4),
  femininePast: Word('втянулась', 4),
  neuterPast: Word('втянулось', 4),
  pluralPast: Word('втянулись', 4),
  imperativeInformal: Word('втянись', 4),
  imperativeFormal: Word('втянитесь', 4),
  imperfect: [],
};

perfectVerbs.set(втянуться.name.text, втянуться);

export { втянуться };