import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вознести: PerfectVerb = {
  name: Word('вознести', 7),
  singular1stPerson: Word('вознесу', 6),
  singular2ndPerson: Word('вознесёшь', 4),
  singular3rdPerson: Word('вознесёт', 4),
  plural1stPerson: Word('вознесём', 4),
  plural2ndPerson: Word('вознесёте', 4),
  plural3rdPerson: Word('вознесут', 6),
  masculinePast: Word('вознёс', 1),
  femininePast: Word('вознесла', 7),
  neuterPast: Word('вознесло', 7),
  pluralPast: Word('вознесли', 7),
  imperativeInformal: Word('вознеси', 6),
  imperativeFormal: Word('вознесите', 6),
  imperfect: [],
};

perfectVerbs.set(вознести.name.text, вознести);

export { вознести };