import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спиливать: PerfectVerb = {
  name: Word('спиливать', 2),
  singular1stPerson: Word('спиливаю', 2),
  singular2ndPerson: Word('спиливаешь', 2),
  singular3rdPerson: Word('спиливает', 2),
  plural1stPerson: Word('спиливаем', 2),
  plural2ndPerson: Word('спиливаете', 2),
  plural3rdPerson: Word('спиливают', 2),
  masculinePast: Word('спиливал', 2),
  femininePast: Word('спиливала', 2),
  neuterPast: Word('спиливало', 2),
  pluralPast: Word('спиливали', 2),
  imperativeInformal: Word('спиливай', 2),
  imperativeFormal: Word('спиливайте', 2),
  imperfect: [],
};

perfectVerbs.set(спиливать.name.text, спиливать);

export { спиливать };