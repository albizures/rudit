import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдавливать: PerfectVerb = {
  name: Word('сдавливать', 2),
  singular1stPerson: Word('сдавливаю', 2),
  singular2ndPerson: Word('сдавливаешь', 2),
  singular3rdPerson: Word('сдавливает', 2),
  plural1stPerson: Word('сдавливаем', 2),
  plural2ndPerson: Word('сдавливаете', 2),
  plural3rdPerson: Word('сдавливают', 2),
  masculinePast: Word('сдавливал', 2),
  femininePast: Word('сдавливала', 2),
  neuterPast: Word('сдавливало', 2),
  pluralPast: Word('сдавливали', 2),
  imperativeInformal: Word('сдавливай', 2),
  imperativeFormal: Word('сдавливайте', 2),
  imperfect: [],
};

perfectVerbs.set(сдавливать.name.text, сдавливать);

export { сдавливать };