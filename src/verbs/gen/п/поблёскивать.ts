import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поблёскивать: PerfectVerb = {
  name: Word('поблёскивать', 9),
  singular1stPerson: Word('поблёскиваю', 9),
  singular2ndPerson: Word('поблёскиваешь', 9),
  singular3rdPerson: Word('поблёскивает', 9),
  plural1stPerson: Word('поблёскиваем', 9),
  plural2ndPerson: Word('поблёскиваете', 9),
  plural3rdPerson: Word('поблёскивают', 9),
  masculinePast: Word('поблёскивал', 9),
  femininePast: Word('поблёскивала', 9),
  neuterPast: Word('поблёскивало', 9),
  pluralPast: Word('поблёскивали', 9),
  imperativeInformal: Word('поблёскивай', 9),
  imperativeFormal: Word('поблёскивайте', 9),
  imperfect: [],
};

perfectVerbs.set(поблёскивать.name.text, поблёскивать);

export { поблёскивать };