import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выполаскивать: PerfectVerb = {
  name: Word('выполаскивать', 5),
  singular1stPerson: Word('выполаскиваю', 5),
  singular2ndPerson: Word('выполаскиваешь', 5),
  singular3rdPerson: Word('выполаскивает', 5),
  plural1stPerson: Word('выполаскиваем', 5),
  plural2ndPerson: Word('выполаскиваете', 5),
  plural3rdPerson: Word('выполаскивают', 5),
  masculinePast: Word('выполаскивал', 5),
  femininePast: Word('выполаскивала', 5),
  neuterPast: Word('выполаскивало', 5),
  pluralPast: Word('выполаскивали', 5),
  imperativeInformal: Word('выполаскивай', 5),
  imperativeFormal: Word('выполаскивайте', 5),
  imperfect: [],
};

perfectVerbs.set(выполаскивать.name.text, выполаскивать);

export { выполаскивать };