import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const догнивать: PerfectVerb = {
  name: Word('догнивать', 6),
  singular1stPerson: Word('догниваю', 6),
  singular2ndPerson: Word('догниваешь', 6),
  singular3rdPerson: Word('догнивает', 6),
  plural1stPerson: Word('догниваем', 6),
  plural2ndPerson: Word('догниваете', 6),
  plural3rdPerson: Word('догнивают', 6),
  masculinePast: Word('догнивал', 6),
  femininePast: Word('догнивала', 6),
  neuterPast: Word('догнивало', 6),
  pluralPast: Word('догнивали', 6),
  imperativeInformal: Word('догнивай', 6),
  imperativeFormal: Word('догнивайте', 6),
  imperfect: [],
};

perfectVerbs.set(догнивать.name.text, догнивать);

export { догнивать };