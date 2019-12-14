import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпихивать: PerfectVerb = {
  name: Word('отпихивать', 3),
  singular1stPerson: Word('отпихиваю', 3),
  singular2ndPerson: Word('отпихиваешь', 3),
  singular3rdPerson: Word('отпихивает', 3),
  plural1stPerson: Word('отпихиваем', 3),
  plural2ndPerson: Word('отпихиваете', 3),
  plural3rdPerson: Word('отпихивают', 3),
  masculinePast: Word('отпихивал', 3),
  femininePast: Word('отпихивала', 3),
  neuterPast: Word('отпихивало', 3),
  pluralPast: Word('отпихивали', 3),
  imperativeInformal: Word('отпихивай', 3),
  imperativeFormal: Word('отпихивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отпихивать.name.text, отпихивать);

export { отпихивать };