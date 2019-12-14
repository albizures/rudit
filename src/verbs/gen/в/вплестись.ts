import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вплестись: PerfectVerb = {
  name: Word('вплестись', 6),
  singular1stPerson: Word('вплетусь', 5),
  singular2ndPerson: Word('вплетёшься', 5),
  singular3rdPerson: Word('вплетётся', 5),
  plural1stPerson: Word('вплетёмся', 5),
  plural2ndPerson: Word('вплетётесь', 5),
  plural3rdPerson: Word('вплетутся', 5),
  masculinePast: Word('вплёлся', 3),
  femininePast: Word('вплелась', 5),
  neuterPast: Word('вплелось', 5),
  pluralPast: Word('вплелись', 5),
  imperativeInformal: Word('вплетись', 5),
  imperativeFormal: Word('вплетитесь', 5),
  imperfect: [],
};

perfectVerbs.set(вплестись.name.text, вплестись);

export { вплестись };