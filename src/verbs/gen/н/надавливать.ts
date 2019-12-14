import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надавливать: PerfectVerb = {
  name: Word('надавливать', 3),
  singular1stPerson: Word('надавливаю', 3),
  singular2ndPerson: Word('надавливаешь', 3),
  singular3rdPerson: Word('надавливает', 3),
  plural1stPerson: Word('надавливаем', 3),
  plural2ndPerson: Word('надавливаете', 3),
  plural3rdPerson: Word('надавливают', 3),
  masculinePast: Word('надавливал', 3),
  femininePast: Word('надавливала', 3),
  neuterPast: Word('надавливало', 3),
  pluralPast: Word('надавливали', 3),
  imperativeInformal: Word('надавливай', 3),
  imperativeFormal: Word('надавливайте', 3),
  imperfect: [],
};

perfectVerbs.set(надавливать.name.text, надавливать);

export { надавливать };