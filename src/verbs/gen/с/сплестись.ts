import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплестись: PerfectVerb = {
  name: Word('сплестись', 6),
  singular1stPerson: Word('сплетусь', 5),
  singular2ndPerson: Word('сплетёшься', 3),
  singular3rdPerson: Word('сплетётся', 3),
  plural1stPerson: Word('сплетёмся', 3),
  plural2ndPerson: Word('сплетётесь', 3),
  plural3rdPerson: Word('сплетутся', 5),
  masculinePast: Word('сплёлся', 6),
  femininePast: Word('сплелась', 5),
  neuterPast: Word('сплелось', 5),
  pluralPast: Word('сплелись', 5),
  imperativeInformal: Word('сплетись', 5),
  imperativeFormal: Word('сплетитесь', 5),
  imperfect: [],
};

perfectVerbs.set(сплестись.name.text, сплестись);

export { сплестись };