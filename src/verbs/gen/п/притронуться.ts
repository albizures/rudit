import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притронуться: PerfectVerb = {
  name: Word('притронуться', 5),
  singular1stPerson: Word('притронусь', 5),
  singular2ndPerson: Word('притронешься', 5),
  singular3rdPerson: Word('притронется', 5),
  plural1stPerson: Word('притронемся', 5),
  plural2ndPerson: Word('притронетесь', 5),
  plural3rdPerson: Word('притронутся', 5),
  masculinePast: Word('притронулся', 5),
  femininePast: Word('притронулась', 5),
  neuterPast: Word('притронулось', 5),
  pluralPast: Word('притронулись', 5),
  imperativeInformal: Word('притронься', 5),
  imperativeFormal: Word('притроньтесь', 5),
  imperfect: [],
};

perfectVerbs.set(притронуться.name.text, притронуться);

export { притронуться };