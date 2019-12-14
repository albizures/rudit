import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намасливать: PerfectVerb = {
  name: Word('намасливать', 3),
  singular1stPerson: Word('намасливаю', 3),
  singular2ndPerson: Word('намасливаешь', 3),
  singular3rdPerson: Word('намасливает', 3),
  plural1stPerson: Word('намасливаем', 3),
  plural2ndPerson: Word('намасливаете', 3),
  plural3rdPerson: Word('намасливают', 3),
  masculinePast: Word('намасливал', 3),
  femininePast: Word('намасливала', 3),
  neuterPast: Word('намасливало', 3),
  pluralPast: Word('намасливали', 3),
  imperativeInformal: Word('намасливай', 3),
  imperativeFormal: Word('намасливайте', 3),
  imperfect: [],
};

perfectVerbs.set(намасливать.name.text, намасливать);

export { намасливать };