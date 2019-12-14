import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повертеться: PerfectVerb = {
  name: Word('повертеться', 6),
  singular1stPerson: Word('поверчусь', 6),
  singular2ndPerson: Word('повертишься', 3),
  singular3rdPerson: Word('повертится', 3),
  plural1stPerson: Word('повертимся', 3),
  plural2ndPerson: Word('повертитесь', 3),
  plural3rdPerson: Word('повертятся', 3),
  masculinePast: Word('повертелся', 6),
  femininePast: Word('повертелась', 6),
  neuterPast: Word('повертелось', 6),
  pluralPast: Word('повертелись', 6),
  imperativeInformal: Word('повертись', 6),
  imperativeFormal: Word('повертитесь', 6),
  imperfect: [],
};

perfectVerbs.set(повертеться.name.text, повертеться);

export { повертеться };