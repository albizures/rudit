import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убаюкивать: PerfectVerb = {
  name: Word('убаюкивать', 3),
  singular1stPerson: Word('убаюкиваю', 3),
  singular2ndPerson: Word('убаюкиваешь', 3),
  singular3rdPerson: Word('убаюкивает', 3),
  plural1stPerson: Word('убаюкиваем', 3),
  plural2ndPerson: Word('убаюкиваете', 3),
  plural3rdPerson: Word('убаюкивают', 3),
  masculinePast: Word('убаюкивал', 3),
  femininePast: Word('убаюкивала', 3),
  neuterPast: Word('убаюкивало', 3),
  pluralPast: Word('убаюкивали', 3),
  imperativeInformal: Word('убаюкивай', 3),
  imperativeFormal: Word('убаюкивайте', 3),
  imperfect: [],
};

perfectVerbs.set(убаюкивать.name.text, убаюкивать);

export { убаюкивать };