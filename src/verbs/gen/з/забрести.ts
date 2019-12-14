import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забрести: PerfectVerb = {
  name: Word('забрести', 7),
  singular1stPerson: Word('забреду', 6),
  singular2ndPerson: Word('забредёшь', 6),
  singular3rdPerson: Word('забредёт', 6),
  plural1stPerson: Word('забредём', 6),
  plural2ndPerson: Word('забредёте', 6),
  plural3rdPerson: Word('забредут', 6),
  masculinePast: Word('забрёл', 4),
  femininePast: Word('забрела', 6),
  neuterPast: Word('забрело', 6),
  pluralPast: Word('забрели', 6),
  imperativeInformal: Word('забреди', 6),
  imperativeFormal: Word('забредите', 6),
  imperfect: [],
};

perfectVerbs.set(забрести.name.text, забрести);

export { забрести };