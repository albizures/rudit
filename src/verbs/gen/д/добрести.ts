import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добрести: PerfectVerb = {
  name: Word('добрести', 7),
  singular1stPerson: Word('добреду', 6),
  singular2ndPerson: Word('добредёшь', 6),
  singular3rdPerson: Word('добредёт', 6),
  plural1stPerson: Word('добредём', 6),
  plural2ndPerson: Word('добредёте', 6),
  plural3rdPerson: Word('добредут', 6),
  masculinePast: Word('добрёл', 4),
  femininePast: Word('добрела', 6),
  neuterPast: Word('добрело', 6),
  pluralPast: Word('добрели', 6),
  imperativeInformal: Word('добреди', 6),
  imperativeFormal: Word('добредите', 6),
  imperfect: [],
};

perfectVerbs.set(добрести.name.text, добрести);

export { добрести };