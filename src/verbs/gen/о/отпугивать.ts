import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпугивать: PerfectVerb = {
  name: Word('отпугивать', 3),
  singular1stPerson: Word('отпугиваю', 3),
  singular2ndPerson: Word('отпугиваешь', 3),
  singular3rdPerson: Word('отпугивает', 3),
  plural1stPerson: Word('отпугиваем', 3),
  plural2ndPerson: Word('отпугиваете', 3),
  plural3rdPerson: Word('отпугивают', 3),
  masculinePast: Word('отпугивал', 3),
  femininePast: Word('отпугивала', 3),
  neuterPast: Word('отпугивало', 3),
  pluralPast: Word('отпугивали', 3),
  imperativeInformal: Word('отпугивай', 3),
  imperativeFormal: Word('отпугивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отпугивать.name.text, отпугивать);

export { отпугивать };