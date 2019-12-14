import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрещивать: PerfectVerb = {
  name: Word('скрещивать', 3),
  singular1stPerson: Word('скрещиваю', 3),
  singular2ndPerson: Word('скрещиваешь', 3),
  singular3rdPerson: Word('скрещивает', 3),
  plural1stPerson: Word('скрещиваем', 3),
  plural2ndPerson: Word('скрещиваете', 3),
  plural3rdPerson: Word('скрещивают', 3),
  masculinePast: Word('скрещивал', 3),
  femininePast: Word('скрещивала', 3),
  neuterPast: Word('скрещивало', 3),
  pluralPast: Word('скрещивали', 3),
  imperativeInformal: Word('скрещивай', 3),
  imperativeFormal: Word('скрещивайте', 3),
  imperfect: [],
};

perfectVerbs.set(скрещивать.name.text, скрещивать);

export { скрещивать };