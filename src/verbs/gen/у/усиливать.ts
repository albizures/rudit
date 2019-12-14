import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усиливать: PerfectVerb = {
  name: Word('усиливать', 2),
  singular1stPerson: Word('усиливаю', 2),
  singular2ndPerson: Word('усиливаешь', 2),
  singular3rdPerson: Word('усиливает', 2),
  plural1stPerson: Word('усиливаем', 2),
  plural2ndPerson: Word('усиливаете', 2),
  plural3rdPerson: Word('усиливают', 2),
  masculinePast: Word('усиливал', 2),
  femininePast: Word('усиливала', 2),
  neuterPast: Word('усиливало', 2),
  pluralPast: Word('усиливали', 2),
  imperativeInformal: Word('усиливай', 2),
  imperativeFormal: Word('усиливайте', 2),
  imperfect: [],
};

perfectVerbs.set(усиливать.name.text, усиливать);

export { усиливать };