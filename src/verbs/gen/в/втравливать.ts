import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втравливать: PerfectVerb = {
  name: Word('втравливать', 3),
  singular1stPerson: Word('втравливаю', 3),
  singular2ndPerson: Word('втравливаешь', 3),
  singular3rdPerson: Word('втравливает', 3),
  plural1stPerson: Word('втравливаем', 3),
  plural2ndPerson: Word('втравливаете', 3),
  plural3rdPerson: Word('втравливают', 3),
  masculinePast: Word('втравливал', 3),
  femininePast: Word('втравливала', 3),
  neuterPast: Word('втравливало', 3),
  pluralPast: Word('втравливали', 3),
  imperativeInformal: Word('втравливай', 3),
  imperativeFormal: Word('втравливайте', 3),
  imperfect: [],
};

perfectVerbs.set(втравливать.name.text, втравливать);

export { втравливать };