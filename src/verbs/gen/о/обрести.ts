import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрести: PerfectVerb = {
  name: Word('обрести', 6),
  singular1stPerson: Word('обрету', 5),
  singular2ndPerson: Word('обретёшь', 5),
  singular3rdPerson: Word('обретёт', 5),
  plural1stPerson: Word('обретём', 5),
  plural2ndPerson: Word('обретёте', 5),
  plural3rdPerson: Word('обретут', 5),
  masculinePast: Word('обрёл', 3),
  femininePast: Word('обрела', 5),
  neuterPast: Word('обрело', 5),
  pluralPast: Word('обрели', 5),
  imperativeInformal: Word('обрети', 5),
  imperativeFormal: Word('обретите', 5),
  imperfect: [],
};

perfectVerbs.set(обрести.name.text, обрести);

export { обрести };