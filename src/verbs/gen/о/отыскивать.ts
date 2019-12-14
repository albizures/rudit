import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отыскивать: PerfectVerb = {
  name: Word('отыскивать', 2),
  singular1stPerson: Word('отыскиваю', 2),
  singular2ndPerson: Word('отыскиваешь', 2),
  singular3rdPerson: Word('отыскивает', 2),
  plural1stPerson: Word('отыскиваем', 2),
  plural2ndPerson: Word('отыскиваете', 2),
  plural3rdPerson: Word('отыскивают', 2),
  masculinePast: Word('отыскивал', 2),
  femininePast: Word('отыскивала', 2),
  neuterPast: Word('отыскивало', 2),
  pluralPast: Word('отыскивали', 2),
  imperativeInformal: Word('отыскивай', 2),
  imperativeFormal: Word('отыскивайте', 2),
  imperfect: [],
};

perfectVerbs.set(отыскивать.name.text, отыскивать);

export { отыскивать };