import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приобрести: PerfectVerb = {
  name: Word('приобрести', 9),
  singular1stPerson: Word('приобрету', 8),
  singular2ndPerson: Word('приобретёшь', 8),
  singular3rdPerson: Word('приобретёт', 8),
  plural1stPerson: Word('приобретём', 8),
  plural2ndPerson: Word('приобретёте', 8),
  plural3rdPerson: Word('приобретут', 8),
  masculinePast: Word('приобрёл', 6),
  femininePast: Word('приобрела', 8),
  neuterPast: Word('приобрело', 8),
  pluralPast: Word('приобрели', 8),
  imperativeInformal: Word('приобрети', 8),
  imperativeFormal: Word('приобретите', 8),
  imperfect: ['приобретать'],
};

perfectVerbs.set(приобрести.name.text, приобрести);

export { приобрести };