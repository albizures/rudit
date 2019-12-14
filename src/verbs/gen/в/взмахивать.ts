import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взмахивать: PerfectVerb = {
  name: Word('взмахивать', 3),
  singular1stPerson: Word('взмахиваю', 3),
  singular2ndPerson: Word('взмахиваешь', 3),
  singular3rdPerson: Word('взмахивает', 3),
  plural1stPerson: Word('взмахиваем', 3),
  plural2ndPerson: Word('взмахиваете', 3),
  plural3rdPerson: Word('взмахивают', 3),
  masculinePast: Word('взмахивал', 3),
  femininePast: Word('взмахивала', 3),
  neuterPast: Word('взмахивало', 3),
  pluralPast: Word('взмахивали', 3),
  imperativeInformal: Word('взмахивай', 3),
  imperativeFormal: Word('взмахивайте', 3),
  imperfect: [],
};

perfectVerbs.set(взмахивать.name.text, взмахивать);

export { взмахивать };