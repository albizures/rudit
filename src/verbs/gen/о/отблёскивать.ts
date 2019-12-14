import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отблёскивать: PerfectVerb = {
  name: Word('отблёскивать', 9),
  singular1stPerson: Word('отблёскиваю', 9),
  singular2ndPerson: Word('отблёскиваешь', 9),
  singular3rdPerson: Word('отблёскивает', 9),
  plural1stPerson: Word('отблёскиваем', 9),
  plural2ndPerson: Word('отблёскиваете', 9),
  plural3rdPerson: Word('отблёскивают', 9),
  masculinePast: Word('отблёскивал', 9),
  femininePast: Word('отблёскивала', 9),
  neuterPast: Word('отблёскивало', 9),
  pluralPast: Word('отблёскивали', 9),
  imperativeInformal: Word('отблёскивай', 9),
  imperativeFormal: Word('отблёскивайте', 9),
  imperfect: [],
};

perfectVerbs.set(отблёскивать.name.text, отблёскивать);

export { отблёскивать };