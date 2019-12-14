import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растягивать: PerfectVerb = {
  name: Word('растягивать', 4),
  singular1stPerson: Word('растягиваю', 4),
  singular2ndPerson: Word('растягиваешь', 4),
  singular3rdPerson: Word('растягивает', 4),
  plural1stPerson: Word('растягиваем', 4),
  plural2ndPerson: Word('растягиваете', 4),
  plural3rdPerson: Word('растягивают', 4),
  masculinePast: Word('растягивал', 4),
  femininePast: Word('растягивала', 4),
  neuterPast: Word('растягивало', 4),
  pluralPast: Word('растягивали', 4),
  imperativeInformal: Word('растягивай', 4),
  imperativeFormal: Word('растягивайте', 4),
  imperfect: [],
};

perfectVerbs.set(растягивать.name.text, растягивать);

export { растягивать };