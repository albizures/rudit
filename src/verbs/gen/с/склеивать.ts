import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const склеивать: PerfectVerb = {
  name: Word('склеивать', 3),
  singular1stPerson: Word('склеиваю', 3),
  singular2ndPerson: Word('склеиваешь', 3),
  singular3rdPerson: Word('склеивает', 3),
  plural1stPerson: Word('склеиваем', 3),
  plural2ndPerson: Word('склеиваете', 3),
  plural3rdPerson: Word('склеивают', 3),
  masculinePast: Word('склеивал', 3),
  femininePast: Word('склеивала', 3),
  neuterPast: Word('склеивало', 3),
  pluralPast: Word('склеивали', 3),
  imperativeInformal: Word('склеивай', 3),
  imperativeFormal: Word('склеивайте', 3),
  imperfect: [],
};

perfectVerbs.set(склеивать.name.text, склеивать);

export { склеивать };