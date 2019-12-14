import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вознестись: PerfectVerb = {
  name: Word('вознестись', 7),
  singular1stPerson: Word('вознесусь', 6),
  singular2ndPerson: Word('вознесёшься', 4),
  singular3rdPerson: Word('вознесётся', 4),
  plural1stPerson: Word('вознесёмся', 4),
  plural2ndPerson: Word('вознесётесь', 4),
  plural3rdPerson: Word('вознесутся', 6),
  masculinePast: Word('вознёсся', 1),
  femininePast: Word('вознеслась', 7),
  neuterPast: Word('вознеслось', 7),
  pluralPast: Word('вознеслись', 7),
  imperativeInformal: Word('вознесись', 6),
  imperativeFormal: Word('вознеситесь', 6),
  imperfect: [],
};

perfectVerbs.set(вознестись.name.text, вознестись);

export { вознестись };