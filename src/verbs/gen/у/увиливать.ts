import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увиливать: PerfectVerb = {
  name: Word('увиливать', 2),
  singular1stPerson: Word('увиливаю', 2),
  singular2ndPerson: Word('увиливаешь', 2),
  singular3rdPerson: Word('увиливает', 2),
  plural1stPerson: Word('увиливаем', 2),
  plural2ndPerson: Word('увиливаете', 2),
  plural3rdPerson: Word('увиливают', 2),
  masculinePast: Word('увиливал', 2),
  femininePast: Word('увиливала', 2),
  neuterPast: Word('увиливало', 2),
  pluralPast: Word('увиливали', 2),
  imperativeInformal: Word('увиливай', 2),
  imperativeFormal: Word('увиливайте', 2),
  imperfect: ['увильнуть'],
};

perfectVerbs.set(увиливать.name.text, увиливать);

export { увиливать };