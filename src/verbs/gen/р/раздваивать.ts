import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздваивать: PerfectVerb = {
  name: Word('раздваивать', 5),
  singular1stPerson: Word('раздваиваю', 5),
  singular2ndPerson: Word('раздваиваешь', 5),
  singular3rdPerson: Word('раздваивает', 5),
  plural1stPerson: Word('раздваиваем', 5),
  plural2ndPerson: Word('раздваиваете', 5),
  plural3rdPerson: Word('раздваивают', 5),
  masculinePast: Word('раздваивал', 5),
  femininePast: Word('раздваивала', 5),
  neuterPast: Word('раздваивало', 5),
  pluralPast: Word('раздваивали', 5),
  imperativeInformal: Word('раздваивай', 5),
  imperativeFormal: Word('раздваивайте', 5),
  imperfect: [],
};

perfectVerbs.set(раздваивать.name.text, раздваивать);

export { раздваивать };