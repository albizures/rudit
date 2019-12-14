import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приобретать: PerfectVerb = {
  name: Word('приобретать', 8),
  singular1stPerson: Word('приобретаю', 8),
  singular2ndPerson: Word('приобретаешь', 8),
  singular3rdPerson: Word('приобретает', 8),
  plural1stPerson: Word('приобретаем', 8),
  plural2ndPerson: Word('приобретаете', 8),
  plural3rdPerson: Word('приобретают', 8),
  masculinePast: Word('приобретал', 8),
  femininePast: Word('приобретала', 8),
  neuterPast: Word('приобретало', 8),
  pluralPast: Word('приобретали', 8),
  imperativeInformal: Word('приобретай', 8),
  imperativeFormal: Word('приобретайте', 8),
  imperfect: ['приобрести'],
};

perfectVerbs.set(приобретать.name.text, приобретать);

export { приобретать };