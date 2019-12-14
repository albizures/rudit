import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скручивать: PerfectVerb = {
  name: Word('скручивать', 3),
  singular1stPerson: Word('скручиваю', 3),
  singular2ndPerson: Word('скручиваешь', 3),
  singular3rdPerson: Word('скручивает', 3),
  plural1stPerson: Word('скручиваем', 3),
  plural2ndPerson: Word('скручиваете', 3),
  plural3rdPerson: Word('скручивают', 3),
  masculinePast: Word('скручивал', 3),
  femininePast: Word('скручивала', 3),
  neuterPast: Word('скручивало', 3),
  pluralPast: Word('скручивали', 3),
  imperativeInformal: Word('скручивай', 3),
  imperativeFormal: Word('скручивайте', 3),
  imperfect: [],
};

perfectVerbs.set(скручивать.name.text, скручивать);

export { скручивать };