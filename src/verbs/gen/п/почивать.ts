import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почивать: PerfectVerb = {
  name: Word('почивать', 5),
  singular1stPerson: Word('почиваю', 5),
  singular2ndPerson: Word('почиваешь', 5),
  singular3rdPerson: Word('почивает', 5),
  plural1stPerson: Word('почиваем', 5),
  plural2ndPerson: Word('почиваете', 5),
  plural3rdPerson: Word('почивают', 5),
  masculinePast: Word('почивал', 5),
  femininePast: Word('почивала', 5),
  neuterPast: Word('почивало', 5),
  pluralPast: Word('почивали', 5),
  imperativeInformal: Word('почивай', 5),
  imperativeFormal: Word('почивайте', 5),
  imperfect: [],
};

perfectVerbs.set(почивать.name.text, почивать);

export { почивать };