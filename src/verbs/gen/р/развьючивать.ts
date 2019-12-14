import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развьючивать: PerfectVerb = {
  name: Word('развьючивать', 5),
  singular1stPerson: Word('развьючиваю', 5),
  singular2ndPerson: Word('развьючиваешь', 5),
  singular3rdPerson: Word('развьючивает', 5),
  plural1stPerson: Word('развьючиваем', 5),
  plural2ndPerson: Word('развьючиваете', 5),
  plural3rdPerson: Word('развьючивают', 5),
  masculinePast: Word('развьючивал', 5),
  femininePast: Word('развьючивала', 5),
  neuterPast: Word('развьючивало', 5),
  pluralPast: Word('развьючивали', 5),
  imperativeInformal: Word('развьючивай', 5),
  imperativeFormal: Word('развьючивайте', 5),
  imperfect: [],
};

perfectVerbs.set(развьючивать.name.text, развьючивать);

export { развьючивать };