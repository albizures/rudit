import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забивать: PerfectVerb = {
  name: Word('забивать', 5),
  singular1stPerson: Word('забиваю', 5),
  singular2ndPerson: Word('забиваешь', 5),
  singular3rdPerson: Word('забивает', 5),
  plural1stPerson: Word('забиваем', 5),
  plural2ndPerson: Word('забиваете', 5),
  plural3rdPerson: Word('забивают', 5),
  masculinePast: Word('забивал', 5),
  femininePast: Word('забивала', 5),
  neuterPast: Word('забивало', 5),
  pluralPast: Word('забивали', 5),
  imperativeInformal: Word('забивай', 5),
  imperativeFormal: Word('забивайте', 5),
  imperfect: [],
};

perfectVerbs.set(забивать.name.text, забивать);

export { забивать };