import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стронуться: PerfectVerb = {
  name: Word('стронуться', 3),
  singular1stPerson: Word('стронусь', 3),
  singular2ndPerson: Word('стронешься', 3),
  singular3rdPerson: Word('стронется', 3),
  plural1stPerson: Word('стронемся', 3),
  plural2ndPerson: Word('стронетесь', 3),
  plural3rdPerson: Word('стронутся', 3),
  masculinePast: Word('стронулся', 3),
  femininePast: Word('стронулась', 3),
  neuterPast: Word('стронулось', 3),
  pluralPast: Word('стронулись', 3),
  imperativeInformal: Word('стронься', 3),
  imperativeFormal: Word('строньтесь', 3),
  imperfect: [],
};

perfectVerbs.set(стронуться.name.text, стронуться);

export { стронуться };