import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удваивать: PerfectVerb = {
  name: Word('удваивать', 3),
  singular1stPerson: Word('удваиваю', 3),
  singular2ndPerson: Word('удваиваешь', 3),
  singular3rdPerson: Word('удваивает', 3),
  plural1stPerson: Word('удваиваем', 3),
  plural2ndPerson: Word('удваиваете', 3),
  plural3rdPerson: Word('удваивают', 3),
  masculinePast: Word('удваивал', 3),
  femininePast: Word('удваивала', 3),
  neuterPast: Word('удваивало', 3),
  pluralPast: Word('удваивали', 3),
  imperativeInformal: Word('удваивай', 3),
  imperativeFormal: Word('удваивайте', 3),
  imperfect: [],
};

perfectVerbs.set(удваивать.name.text, удваивать);

export { удваивать };