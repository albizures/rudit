import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свестись: PerfectVerb = {
  name: Word('свестись', 5),
  singular1stPerson: Word('сведусь', 4),
  singular2ndPerson: Word('сведёшься', 2),
  singular3rdPerson: Word('сведётся', 2),
  plural1stPerson: Word('сведёмся', 2),
  plural2ndPerson: Word('сведётесь', 2),
  plural3rdPerson: Word('сведутся', 4),
  masculinePast: Word('свёлся', 5),
  femininePast: Word('свелась', 4),
  neuterPast: Word('свелось', 4),
  pluralPast: Word('свелись', 4),
  imperativeInformal: Word('сведись', 4),
  imperativeFormal: Word('сведитесь', 4),
  imperfect: [],
};

perfectVerbs.set(свестись.name.text, свестись);

export { свестись };