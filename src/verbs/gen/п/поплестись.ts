import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поплестись: PerfectVerb = {
  name: Word('поплестись', 7),
  singular1stPerson: Word('поплетусь', 6),
  singular2ndPerson: Word('поплетёшься', 4),
  singular3rdPerson: Word('поплетётся', 4),
  plural1stPerson: Word('поплетёмся', 4),
  plural2ndPerson: Word('поплетётесь', 4),
  plural3rdPerson: Word('поплетутся', 6),
  masculinePast: Word('поплёлся', 1),
  femininePast: Word('поплелась', 6),
  neuterPast: Word('поплелось', 6),
  pluralPast: Word('поплелись', 6),
  imperativeInformal: Word('поплетись', 6),
  imperativeFormal: Word('поплетитесь', 6),
  imperfect: [],
};

perfectVerbs.set(поплестись.name.text, поплестись);

export { поплестись };