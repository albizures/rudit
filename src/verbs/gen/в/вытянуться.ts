import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытянуться: PerfectVerb = {
  name: Word('вытянуться', 1),
  singular1stPerson: Word('вытянусь', 1),
  singular2ndPerson: Word('вытянешься', 1),
  singular3rdPerson: Word('вытянется', 1),
  plural1stPerson: Word('вытянемся', 1),
  plural2ndPerson: Word('вытянетесь', 1),
  plural3rdPerson: Word('вытянутся', 1),
  masculinePast: Word('вытянулся', 1),
  femininePast: Word('вытянулась', 1),
  neuterPast: Word('вытянулось', 1),
  pluralPast: Word('вытянулись', 1),
  imperativeInformal: Word('вытянись', 1),
  imperativeFormal: Word('вытянитесь', 1),
  imperfect: [],
};

perfectVerbs.set(вытянуться.name.text, вытянуться);

export { вытянуться };