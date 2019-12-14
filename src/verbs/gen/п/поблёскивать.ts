import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поблёскивать: PerfectVerb = {
  name: Word('поблёскивать', 4),
  singular1stPerson: Word('поблёскиваю', 4),
  singular2ndPerson: Word('поблёскиваешь', 4),
  singular3rdPerson: Word('поблёскивает', 4),
  plural1stPerson: Word('поблёскиваем', 4),
  plural2ndPerson: Word('поблёскиваете', 4),
  plural3rdPerson: Word('поблёскивают', 4),
  masculinePast: Word('поблёскивал', 4),
  femininePast: Word('поблёскивала', 4),
  neuterPast: Word('поблёскивало', 4),
  pluralPast: Word('поблёскивали', 4),
  imperativeInformal: Word('поблёскивай', 4),
  imperativeFormal: Word('поблёскивайте', 4),
  imperfect: [],
};

perfectVerbs.set(поблёскивать.name.text, поблёскивать);

export { поблёскивать };