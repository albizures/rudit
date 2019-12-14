import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпиливать: PerfectVerb = {
  name: Word('подпиливать', 4),
  singular1stPerson: Word('подпиливаю', 4),
  singular2ndPerson: Word('подпиливаешь', 4),
  singular3rdPerson: Word('подпиливает', 4),
  plural1stPerson: Word('подпиливаем', 4),
  plural2ndPerson: Word('подпиливаете', 4),
  plural3rdPerson: Word('подпиливают', 4),
  masculinePast: Word('подпиливал', 4),
  femininePast: Word('подпиливала', 4),
  neuterPast: Word('подпиливало', 4),
  pluralPast: Word('подпиливали', 4),
  imperativeInformal: Word('подпиливай', 4),
  imperativeFormal: Word('подпиливайте', 4),
  imperfect: [],
};

perfectVerbs.set(подпиливать.name.text, подпиливать);

export { подпиливать };