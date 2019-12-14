import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задурманивать: PerfectVerb = {
  name: Word('задурманивать', 6),
  singular1stPerson: Word('задурманиваю', 6),
  singular2ndPerson: Word('задурманиваешь', 6),
  singular3rdPerson: Word('задурманивает', 6),
  plural1stPerson: Word('задурманиваем', 6),
  plural2ndPerson: Word('задурманиваете', 6),
  plural3rdPerson: Word('задурманивают', 6),
  masculinePast: Word('задурманивал', 6),
  femininePast: Word('задурманивала', 6),
  neuterPast: Word('задурманивало', 6),
  pluralPast: Word('задурманивали', 6),
  imperativeInformal: Word('задурманивай', 6),
  imperativeFormal: Word('задурманивайте', 6),
  imperfect: [],
};

perfectVerbs.set(задурманивать.name.text, задурманивать);

export { задурманивать };