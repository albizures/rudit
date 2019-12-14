import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проворачивать: PerfectVerb = {
  name: Word('проворачивать', 6),
  singular1stPerson: Word('проворачиваю', 6),
  singular2ndPerson: Word('проворачиваешь', 6),
  singular3rdPerson: Word('проворачивает', 6),
  plural1stPerson: Word('проворачиваем', 6),
  plural2ndPerson: Word('проворачиваете', 6),
  plural3rdPerson: Word('проворачивают', 6),
  masculinePast: Word('проворачивал', 6),
  femininePast: Word('проворачивала', 6),
  neuterPast: Word('проворачивало', 6),
  pluralPast: Word('проворачивали', 6),
  imperativeInformal: Word('проворачивай', 6),
  imperativeFormal: Word('проворачивайте', 6),
  imperfect: [],
};

perfectVerbs.set(проворачивать.name.text, проворачивать);

export { проворачивать };