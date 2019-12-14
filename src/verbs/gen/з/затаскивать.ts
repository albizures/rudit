import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затаскивать: PerfectVerb = {
  name: Word('затаскивать', 3),
  singular1stPerson: Word('затаскиваю', 3),
  singular2ndPerson: Word('затаскиваешь', 3),
  singular3rdPerson: Word('затаскивает', 3),
  plural1stPerson: Word('затаскиваем', 3),
  plural2ndPerson: Word('затаскиваете', 3),
  plural3rdPerson: Word('затаскивают', 3),
  masculinePast: Word('затаскивал', 3),
  femininePast: Word('затаскивала', 3),
  neuterPast: Word('затаскивало', 3),
  pluralPast: Word('затаскивали', 3),
  imperativeInformal: Word('затаскивай', 3),
  imperativeFormal: Word('затаскивайте', 3),
  imperfect: [],
};

perfectVerbs.set(затаскивать.name.text, затаскивать);

export { затаскивать };