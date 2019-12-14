import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлынивать: PerfectVerb = {
  name: Word('отлынивать', 3),
  singular1stPerson: Word('отлыниваю', 3),
  singular2ndPerson: Word('отлыниваешь', 3),
  singular3rdPerson: Word('отлынивает', 3),
  plural1stPerson: Word('отлыниваем', 3),
  plural2ndPerson: Word('отлыниваете', 3),
  plural3rdPerson: Word('отлынивают', 3),
  masculinePast: Word('отлынивал', 3),
  femininePast: Word('отлынивала', 3),
  neuterPast: Word('отлынивало', 3),
  pluralPast: Word('отлынивали', 3),
  imperativeInformal: Word('отлынивай', 3),
  imperativeFormal: Word('отлынивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отлынивать.name.text, отлынивать);

export { отлынивать };