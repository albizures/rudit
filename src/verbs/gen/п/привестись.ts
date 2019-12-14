import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привестись: PerfectVerb = {
  name: Word('привестись', 7),
  singular1stPerson: Word('приведусь', 6),
  singular2ndPerson: Word('приведёшься', 6),
  singular3rdPerson: Word('приведётся', 6),
  plural1stPerson: Word('приведёмся', 6),
  plural2ndPerson: Word('приведётесь', 6),
  plural3rdPerson: Word('приведутся', 6),
  masculinePast: Word('привёлся', 4),
  femininePast: Word('привелась', 6),
  neuterPast: Word('привелось', 6),
  pluralPast: Word('привелись', 6),
  imperativeInformal: Word('приведись', 6),
  imperativeFormal: Word('приведитесь', 6),
  imperfect: [],
};

perfectVerbs.set(привестись.name.text, привестись);

export { привестись };