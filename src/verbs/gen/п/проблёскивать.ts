import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проблёскивать: PerfectVerb = {
  name: Word('проблёскивать', 5),
  singular1stPerson: Word('проблёскиваю', 5),
  singular2ndPerson: Word('проблёскиваешь', 5),
  singular3rdPerson: Word('проблёскивает', 5),
  plural1stPerson: Word('проблёскиваем', 5),
  plural2ndPerson: Word('проблёскиваете', 5),
  plural3rdPerson: Word('проблёскивают', 5),
  masculinePast: Word('проблёскивал', 5),
  femininePast: Word('проблёскивала', 5),
  neuterPast: Word('проблёскивало', 5),
  pluralPast: Word('проблёскивали', 5),
  imperativeInformal: Word('проблёскивай', 5),
  imperativeFormal: Word('проблёскивайте', 5),
  imperfect: [],
};

perfectVerbs.set(проблёскивать.name.text, проблёскивать);

export { проблёскивать };