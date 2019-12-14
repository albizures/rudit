import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдваивать: PerfectVerb = {
  name: Word('сдваивать', 3),
  singular1stPerson: Word('сдваиваю', 3),
  singular2ndPerson: Word('сдваиваешь', 3),
  singular3rdPerson: Word('сдваивает', 3),
  plural1stPerson: Word('сдваиваем', 3),
  plural2ndPerson: Word('сдваиваете', 3),
  plural3rdPerson: Word('сдваивают', 3),
  masculinePast: Word('сдваивал', 3),
  femininePast: Word('сдваивала', 3),
  neuterPast: Word('сдваивало', 3),
  pluralPast: Word('сдваивали', 3),
  imperativeInformal: Word('сдваивай', 3),
  imperativeFormal: Word('сдваивайте', 3),
  imperfect: [],
};

perfectVerbs.set(сдваивать.name.text, сдваивать);

export { сдваивать };