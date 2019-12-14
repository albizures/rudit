import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повестись: PerfectVerb = {
  name: Word('повестись', 6),
  singular1stPerson: Word('поведусь', 5),
  singular2ndPerson: Word('поведёшься', 5),
  singular3rdPerson: Word('поведётся', 5),
  plural1stPerson: Word('поведёмся', 5),
  plural2ndPerson: Word('поведётесь', 5),
  plural3rdPerson: Word('поведутся', 5),
  masculinePast: Word('повёлся', 3),
  femininePast: Word('повелась', 5),
  neuterPast: Word('повелось', 5),
  pluralPast: Word('повелись', 5),
  imperativeInformal: Word('поведись', 5),
  imperativeFormal: Word('поведитесь', 5),
  imperfect: [],
};

perfectVerbs.set(повестись.name.text, повестись);

export { повестись };