import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закивать: PerfectVerb = {
  name: Word('закивать', 5),
  singular1stPerson: Word('закиваю', 5),
  singular2ndPerson: Word('закиваешь', 5),
  singular3rdPerson: Word('закивает', 5),
  plural1stPerson: Word('закиваем', 5),
  plural2ndPerson: Word('закиваете', 5),
  plural3rdPerson: Word('закивают', 5),
  masculinePast: Word('закивал', 5),
  femininePast: Word('закивала', 5),
  neuterPast: Word('закивало', 5),
  pluralPast: Word('закивали', 5),
  imperativeInformal: Word('закивай', 5),
  imperativeFormal: Word('закивайте', 5),
  imperfect: [],
};

perfectVerbs.set(закивать.name.text, закивать);

export { закивать };