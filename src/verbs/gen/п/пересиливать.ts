import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересиливать: PerfectVerb = {
  name: Word('пересиливать', 5),
  singular1stPerson: Word('пересиливаю', 5),
  singular2ndPerson: Word('пересиливаешь', 5),
  singular3rdPerson: Word('пересиливает', 5),
  plural1stPerson: Word('пересиливаем', 5),
  plural2ndPerson: Word('пересиливаете', 5),
  plural3rdPerson: Word('пересиливают', 5),
  masculinePast: Word('пересиливал', 5),
  femininePast: Word('пересиливала', 5),
  neuterPast: Word('пересиливало', 5),
  pluralPast: Word('пересиливали', 5),
  imperativeInformal: Word('пересиливай', 5),
  imperativeFormal: Word('пересиливайте', 5),
  imperfect: [],
};

perfectVerbs.set(пересиливать.name.text, пересиливать);

export { пересиливать };