import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдавливать: PerfectVerb = {
  name: Word('отдавливать', 3),
  singular1stPerson: Word('отдавливаю', 3),
  singular2ndPerson: Word('отдавливаешь', 3),
  singular3rdPerson: Word('отдавливает', 3),
  plural1stPerson: Word('отдавливаем', 3),
  plural2ndPerson: Word('отдавливаете', 3),
  plural3rdPerson: Word('отдавливают', 3),
  masculinePast: Word('отдавливал', 3),
  femininePast: Word('отдавливала', 3),
  neuterPast: Word('отдавливало', 3),
  pluralPast: Word('отдавливали', 3),
  imperativeInformal: Word('отдавливай', 3),
  imperativeFormal: Word('отдавливайте', 3),
  imperfect: [],
};

perfectVerbs.set(отдавливать.name.text, отдавливать);

export { отдавливать };