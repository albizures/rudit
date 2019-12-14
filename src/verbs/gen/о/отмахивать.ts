import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмахивать: PerfectVerb = {
  name: Word('отмахивать', 3),
  singular1stPerson: Word('отмахиваю', 3),
  singular2ndPerson: Word('отмахиваешь', 3),
  singular3rdPerson: Word('отмахивает', 3),
  plural1stPerson: Word('отмахиваем', 3),
  plural2ndPerson: Word('отмахиваете', 3),
  plural3rdPerson: Word('отмахивают', 3),
  masculinePast: Word('отмахивал', 3),
  femininePast: Word('отмахивала', 3),
  neuterPast: Word('отмахивало', 3),
  pluralPast: Word('отмахивали', 3),
  imperativeInformal: Word('отмахивай', 3),
  imperativeFormal: Word('отмахивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отмахивать.name.text, отмахивать);

export { отмахивать };