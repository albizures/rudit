import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проблёскивать: PerfectVerb = {
  name: Word('проблёскивать', 10),
  singular1stPerson: Word('проблёскиваю', 10),
  singular2ndPerson: Word('проблёскиваешь', 10),
  singular3rdPerson: Word('проблёскивает', 10),
  plural1stPerson: Word('проблёскиваем', 10),
  plural2ndPerson: Word('проблёскиваете', 10),
  plural3rdPerson: Word('проблёскивают', 10),
  masculinePast: Word('проблёскивал', 10),
  femininePast: Word('проблёскивала', 10),
  neuterPast: Word('проблёскивало', 10),
  pluralPast: Word('проблёскивали', 10),
  imperativeInformal: Word('проблёскивай', 10),
  imperativeFormal: Word('проблёскивайте', 10),
  imperfect: [],
};

perfectVerbs.set(проблёскивать.name.text, проблёскивать);

export { проблёскивать };