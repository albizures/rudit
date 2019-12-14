import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отблёскивать: PerfectVerb = {
  name: Word('отблёскивать', 4),
  singular1stPerson: Word('отблёскиваю', 4),
  singular2ndPerson: Word('отблёскиваешь', 4),
  singular3rdPerson: Word('отблёскивает', 4),
  plural1stPerson: Word('отблёскиваем', 4),
  plural2ndPerson: Word('отблёскиваете', 4),
  plural3rdPerson: Word('отблёскивают', 4),
  masculinePast: Word('отблёскивал', 4),
  femininePast: Word('отблёскивала', 4),
  neuterPast: Word('отблёскивало', 4),
  pluralPast: Word('отблёскивали', 4),
  imperativeInformal: Word('отблёскивай', 4),
  imperativeFormal: Word('отблёскивайте', 4),
  imperfect: [],
};

perfectVerbs.set(отблёскивать.name.text, отблёскивать);

export { отблёскивать };