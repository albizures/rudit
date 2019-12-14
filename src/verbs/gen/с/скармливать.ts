import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скармливать: PerfectVerb = {
  name: Word('скармливать', 2),
  singular1stPerson: Word('скармливаю', 2),
  singular2ndPerson: Word('скармливаешь', 2),
  singular3rdPerson: Word('скармливает', 2),
  plural1stPerson: Word('скармливаем', 2),
  plural2ndPerson: Word('скармливаете', 2),
  plural3rdPerson: Word('скармливают', 2),
  masculinePast: Word('скармливал', 2),
  femininePast: Word('скармливала', 2),
  neuterPast: Word('скармливало', 2),
  pluralPast: Word('скармливали', 2),
  imperativeInformal: Word('скармливай', 2),
  imperativeFormal: Word('скармливайте', 2),
  imperfect: [],
};

perfectVerbs.set(скармливать.name.text, скармливать);

export { скармливать };