import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проволакивать: PerfectVerb = {
  name: Word('проволакивать', 6),
  singular1stPerson: Word('проволакиваю', 6),
  singular2ndPerson: Word('проволакиваешь', 6),
  singular3rdPerson: Word('проволакивает', 6),
  plural1stPerson: Word('проволакиваем', 6),
  plural2ndPerson: Word('проволакиваете', 6),
  plural3rdPerson: Word('проволакивают', 6),
  masculinePast: Word('проволакивал', 6),
  femininePast: Word('проволакивала', 6),
  neuterPast: Word('проволакивало', 6),
  pluralPast: Word('проволакивали', 6),
  imperativeInformal: Word('проволакивай', 6),
  imperativeFormal: Word('проволакивайте', 6),
  imperfect: [],
};

perfectVerbs.set(проволакивать.name.text, проволакивать);

export { проволакивать };