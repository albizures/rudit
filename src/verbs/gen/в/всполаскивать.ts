import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всполаскивать: PerfectVerb = {
  name: Word('всполаскивать', 5),
  singular1stPerson: Word('всполаскиваю', 5),
  singular2ndPerson: Word('всполаскиваешь', 5),
  singular3rdPerson: Word('всполаскивает', 5),
  plural1stPerson: Word('всполаскиваем', 5),
  plural2ndPerson: Word('всполаскиваете', 5),
  plural3rdPerson: Word('всполаскивают', 5),
  masculinePast: Word('всполаскивал', 5),
  femininePast: Word('всполаскивала', 5),
  neuterPast: Word('всполаскивало', 5),
  pluralPast: Word('всполаскивали', 5),
  imperativeInformal: Word('всполаскивай', 5),
  imperativeFormal: Word('всполаскивайте', 5),
  imperfect: [],
};

perfectVerbs.set(всполаскивать.name.text, всполаскивать);

export { всполаскивать };