import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высмеивать: PerfectVerb = {
  name: Word('высмеивать', 4),
  singular1stPerson: Word('высмеиваю', 4),
  singular2ndPerson: Word('высмеиваешь', 4),
  singular3rdPerson: Word('высмеивает', 4),
  plural1stPerson: Word('высмеиваем', 4),
  plural2ndPerson: Word('высмеиваете', 4),
  plural3rdPerson: Word('высмеивают', 4),
  masculinePast: Word('высмеивал', 4),
  femininePast: Word('высмеивала', 4),
  neuterPast: Word('высмеивало', 4),
  pluralPast: Word('высмеивали', 4),
  imperativeInformal: Word('высмеивай', 4),
  imperativeFormal: Word('высмеивайте', 4),
  imperfect: [],
};

perfectVerbs.set(высмеивать.name.text, высмеивать);

export { высмеивать };