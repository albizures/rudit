import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обескровливать: PerfectVerb = {
  name: Word('обескровливать', 6),
  singular1stPerson: Word('обескровливаю', 6),
  singular2ndPerson: Word('обескровливаешь', 6),
  singular3rdPerson: Word('обескровливает', 6),
  plural1stPerson: Word('обескровливаем', 6),
  plural2ndPerson: Word('обескровливаете', 6),
  plural3rdPerson: Word('обескровливают', 6),
  masculinePast: Word('обескровливал', 6),
  femininePast: Word('обескровливала', 6),
  neuterPast: Word('обескровливало', 6),
  pluralPast: Word('обескровливали', 6),
  imperativeInformal: Word('обескровливай', 6),
  imperativeFormal: Word('обескровливайте', 6),
  imperfect: [],
};

perfectVerbs.set(обескровливать.name.text, обескровливать);

export { обескровливать };