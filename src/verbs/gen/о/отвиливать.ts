import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвиливать: PerfectVerb = {
  name: Word('отвиливать', 3),
  singular1stPerson: Word('отвиливаю', 3),
  singular2ndPerson: Word('отвиливаешь', 3),
  singular3rdPerson: Word('отвиливает', 3),
  plural1stPerson: Word('отвиливаем', 3),
  plural2ndPerson: Word('отвиливаете', 3),
  plural3rdPerson: Word('отвиливают', 3),
  masculinePast: Word('отвиливал', 3),
  femininePast: Word('отвиливала', 3),
  neuterPast: Word('отвиливало', 3),
  pluralPast: Word('отвиливали', 3),
  imperativeInformal: Word('отвиливай', 3),
  imperativeFormal: Word('отвиливайте', 3),
  imperfect: [],
};

perfectVerbs.set(отвиливать.name.text, отвиливать);

export { отвиливать };