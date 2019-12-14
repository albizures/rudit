import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгнивать: PerfectVerb = {
  name: Word('подгнивать', 7),
  singular1stPerson: Word('подгниваю', 7),
  singular2ndPerson: Word('подгниваешь', 7),
  singular3rdPerson: Word('подгнивает', 7),
  plural1stPerson: Word('подгниваем', 7),
  plural2ndPerson: Word('подгниваете', 7),
  plural3rdPerson: Word('подгнивают', 7),
  masculinePast: Word('подгнивал', 7),
  femininePast: Word('подгнивала', 7),
  neuterPast: Word('подгнивало', 7),
  pluralPast: Word('подгнивали', 7),
  imperativeInformal: Word('подгнивай', 7),
  imperativeFormal: Word('подгнивайте', 7),
  imperfect: [],
};

perfectVerbs.set(подгнивать.name.text, подгнивать);

export { подгнивать };