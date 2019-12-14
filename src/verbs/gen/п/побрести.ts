import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побрести: PerfectVerb = {
  name: Word('побрести', 7),
  singular1stPerson: Word('побреду', 6),
  singular2ndPerson: Word('побредёшь', 4),
  singular3rdPerson: Word('побредёт', 4),
  plural1stPerson: Word('побредём', 4),
  plural2ndPerson: Word('побредёте', 4),
  plural3rdPerson: Word('побредут', 6),
  masculinePast: Word('побрёл', 1),
  femininePast: Word('побрела', 6),
  neuterPast: Word('побрело', 6),
  pluralPast: Word('побрели', 6),
  imperativeInformal: Word('побреди', 6),
  imperativeFormal: Word('побредите', 6),
  imperfect: [],
};

perfectVerbs.set(побрести.name.text, побрести);

export { побрести };