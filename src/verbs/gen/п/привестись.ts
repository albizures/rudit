import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привестись: PerfectVerb = {
  name: Word('привестись', 7),
  singular1stPerson: Word('приведусь', 6),
  singular2ndPerson: Word('приведёшься', 4),
  singular3rdPerson: Word('приведётся', 4),
  plural1stPerson: Word('приведёмся', 4),
  plural2ndPerson: Word('приведётесь', 4),
  plural3rdPerson: Word('приведутся', 6),
  masculinePast: Word('привёлся', 2),
  femininePast: Word('привелась', 6),
  neuterPast: Word('привелось', 6),
  pluralPast: Word('привелись', 6),
  imperativeInformal: Word('приведись', 6),
  imperativeFormal: Word('приведитесь', 6),
  imperfect: [],
};

perfectVerbs.set(привестись.name.text, привестись);

export { привестись };