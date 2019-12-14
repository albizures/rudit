import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вертеться: PerfectVerb = {
  name: Word('вертеться', 4),
  singular1stPerson: Word('верчусь', 4),
  singular2ndPerson: Word('вертишься', 1),
  singular3rdPerson: Word('вертится', 1),
  plural1stPerson: Word('вертимся', 1),
  plural2ndPerson: Word('вертитесь', 1),
  plural3rdPerson: Word('вертятся', 1),
  masculinePast: Word('вертелся', 4),
  femininePast: Word('вертелась', 4),
  neuterPast: Word('вертелось', 4),
  pluralPast: Word('вертелись', 4),
  imperativeInformal: Word('вертись', 4),
  imperativeFormal: Word('вертитесь', 4),
  imperfect: [],
};

perfectVerbs.set(вертеться.name.text, вертеться);

export { вертеться };