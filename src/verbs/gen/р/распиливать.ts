import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распиливать: PerfectVerb = {
  name: Word('распиливать', 4),
  singular1stPerson: Word('распиливаю', 4),
  singular2ndPerson: Word('распиливаешь', 4),
  singular3rdPerson: Word('распиливает', 4),
  plural1stPerson: Word('распиливаем', 4),
  plural2ndPerson: Word('распиливаете', 4),
  plural3rdPerson: Word('распиливают', 4),
  masculinePast: Word('распиливал', 4),
  femininePast: Word('распиливала', 4),
  neuterPast: Word('распиливало', 4),
  pluralPast: Word('распиливали', 4),
  imperativeInformal: Word('распиливай', 4),
  imperativeFormal: Word('распиливайте', 4),
  imperfect: [],
};

perfectVerbs.set(распиливать.name.text, распиливать);

export { распиливать };