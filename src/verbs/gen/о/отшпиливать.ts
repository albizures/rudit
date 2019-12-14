import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшпиливать: PerfectVerb = {
  name: Word('отшпиливать', 4),
  singular1stPerson: Word('отшпиливаю', 4),
  singular2ndPerson: Word('отшпиливаешь', 4),
  singular3rdPerson: Word('отшпиливает', 4),
  plural1stPerson: Word('отшпиливаем', 4),
  plural2ndPerson: Word('отшпиливаете', 4),
  plural3rdPerson: Word('отшпиливают', 4),
  masculinePast: Word('отшпиливал', 4),
  femininePast: Word('отшпиливала', 4),
  neuterPast: Word('отшпиливало', 4),
  pluralPast: Word('отшпиливали', 4),
  imperativeInformal: Word('отшпиливай', 4),
  imperativeFormal: Word('отшпиливайте', 4),
  imperfect: [],
};

perfectVerbs.set(отшпиливать.name.text, отшпиливать);

export { отшпиливать };