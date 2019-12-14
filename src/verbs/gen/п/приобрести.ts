import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приобрести: PerfectVerb = {
  name: Word('приобрести', 9),
  singular1stPerson: Word('приобрету', 8),
  singular2ndPerson: Word('приобретёшь', 6),
  singular3rdPerson: Word('приобретёт', 6),
  plural1stPerson: Word('приобретём', 6),
  plural2ndPerson: Word('приобретёте', 6),
  plural3rdPerson: Word('приобретут', 8),
  masculinePast: Word('приобрёл', 2),
  femininePast: Word('приобрела', 8),
  neuterPast: Word('приобрело', 8),
  pluralPast: Word('приобрели', 8),
  imperativeInformal: Word('приобрети', 8),
  imperativeFormal: Word('приобретите', 8),
  imperfect: ['приобретать'],
};

perfectVerbs.set(приобрести.name.text, приобрести);

export { приобрести };