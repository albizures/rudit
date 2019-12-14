import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завестись: PerfectVerb = {
  name: Word('завестись', 6),
  singular1stPerson: Word('заведусь', 5),
  singular2ndPerson: Word('заведёшься', 1),
  singular3rdPerson: Word('заведётся', 1),
  plural1stPerson: Word('заведёмся', 1),
  plural2ndPerson: Word('заведётесь', 1),
  plural3rdPerson: Word('заведутся', 5),
  masculinePast: Word('завёлся', 1),
  femininePast: Word('завелась', 5),
  neuterPast: Word('завелось', 5),
  pluralPast: Word('завелись', 5),
  imperativeInformal: Word('заведись', 5),
  imperativeFormal: Word('заведитесь', 5),
  imperfect: [],
};

perfectVerbs.set(завестись.name.text, завестись);

export { завестись };