import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озадачивать: PerfectVerb = {
  name: Word('озадачивать', 4),
  singular1stPerson: Word('озадачиваю', 4),
  singular2ndPerson: Word('озадачиваешь', 4),
  singular3rdPerson: Word('озадачивает', 4),
  plural1stPerson: Word('озадачиваем', 4),
  plural2ndPerson: Word('озадачиваете', 4),
  plural3rdPerson: Word('озадачивают', 4),
  masculinePast: Word('озадачивал', 4),
  femininePast: Word('озадачивала', 4),
  neuterPast: Word('озадачивало', 4),
  pluralPast: Word('озадачивали', 4),
  imperativeInformal: Word('озадачивай', 4),
  imperativeFormal: Word('озадачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(озадачивать.name.text, озадачивать);

export { озадачивать };