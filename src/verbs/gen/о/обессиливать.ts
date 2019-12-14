import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обессиливать: PerfectVerb = {
  name: Word('обессиливать', 5),
  singular1stPerson: Word('обессиливаю', 5),
  singular2ndPerson: Word('обессиливаешь', 5),
  singular3rdPerson: Word('обессиливает', 5),
  plural1stPerson: Word('обессиливаем', 5),
  plural2ndPerson: Word('обессиливаете', 5),
  plural3rdPerson: Word('обессиливают', 5),
  masculinePast: Word('обессиливал', 5),
  femininePast: Word('обессиливала', 5),
  neuterPast: Word('обессиливало', 5),
  pluralPast: Word('обессиливали', 5),
  imperativeInformal: Word('обессиливай', 5),
  imperativeFormal: Word('обессиливайте', 5),
  imperfect: [],
};

perfectVerbs.set(обессиливать.name.text, обессиливать);

export { обессиливать };