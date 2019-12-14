import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрючивать: PerfectVerb = {
  name: Word('скрючивать', 3),
  singular1stPerson: Word('скрючиваю', 3),
  singular2ndPerson: Word('скрючиваешь', 3),
  singular3rdPerson: Word('скрючивает', 3),
  plural1stPerson: Word('скрючиваем', 3),
  plural2ndPerson: Word('скрючиваете', 3),
  plural3rdPerson: Word('скрючивают', 3),
  masculinePast: Word('скрючивал', 3),
  femininePast: Word('скрючивала', 3),
  neuterPast: Word('скрючивало', 3),
  pluralPast: Word('скрючивали', 3),
  imperativeInformal: Word('скрючивай', 3),
  imperativeFormal: Word('скрючивайте', 3),
  imperfect: [],
};

perfectVerbs.set(скрючивать.name.text, скрючивать);

export { скрючивать };