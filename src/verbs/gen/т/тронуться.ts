import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тронуться: PerfectVerb = {
  name: Word('тронуться', 2),
  singular1stPerson: Word('тронусь', 2),
  singular2ndPerson: Word('тронешься', 2),
  singular3rdPerson: Word('тронется', 2),
  plural1stPerson: Word('тронемся', 2),
  plural2ndPerson: Word('тронетесь', 2),
  plural3rdPerson: Word('тронутся', 2),
  masculinePast: Word('тронулся', 2),
  femininePast: Word('тронулась', 2),
  neuterPast: Word('тронулось', 2),
  pluralPast: Word('тронулись', 2),
  imperativeInformal: Word('тронься', 2),
  imperativeFormal: Word('троньтесь', 2),
  imperfect: [],
};

perfectVerbs.set(тронуться.name.text, тронуться);

export { тронуться };