import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подшпиливать: PerfectVerb = {
  name: Word('подшпиливать', 5),
  singular1stPerson: Word('подшпиливаю', 5),
  singular2ndPerson: Word('подшпиливаешь', 5),
  singular3rdPerson: Word('подшпиливает', 5),
  plural1stPerson: Word('подшпиливаем', 5),
  plural2ndPerson: Word('подшпиливаете', 5),
  plural3rdPerson: Word('подшпиливают', 5),
  masculinePast: Word('подшпиливал', 5),
  femininePast: Word('подшпиливала', 5),
  neuterPast: Word('подшпиливало', 5),
  pluralPast: Word('подшпиливали', 5),
  imperativeInformal: Word('подшпиливай', 5),
  imperativeFormal: Word('подшпиливайте', 5),
  imperfect: [],
};

perfectVerbs.set(подшпиливать.name.text, подшпиливать);

export { подшпиливать };