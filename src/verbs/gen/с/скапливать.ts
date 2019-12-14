import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скапливать: PerfectVerb = {
  name: Word('скапливать', 2),
  singular1stPerson: Word('скапливаю', 2),
  singular2ndPerson: Word('скапливаешь', 2),
  singular3rdPerson: Word('скапливает', 2),
  plural1stPerson: Word('скапливаем', 2),
  plural2ndPerson: Word('скапливаете', 2),
  plural3rdPerson: Word('скапливают', 2),
  masculinePast: Word('скапливал', 2),
  femininePast: Word('скапливала', 2),
  neuterPast: Word('скапливало', 2),
  pluralPast: Word('скапливали', 2),
  imperativeInformal: Word('скапливай', 2),
  imperativeFormal: Word('скапливайте', 2),
  imperfect: [],
};

perfectVerbs.set(скапливать.name.text, скапливать);

export { скапливать };