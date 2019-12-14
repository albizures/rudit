import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проскакивать: PerfectVerb = {
  name: Word('проскакивать', 5),
  singular1stPerson: Word('проскакиваю', 5),
  singular2ndPerson: Word('проскакиваешь', 5),
  singular3rdPerson: Word('проскакивает', 5),
  plural1stPerson: Word('проскакиваем', 5),
  plural2ndPerson: Word('проскакиваете', 5),
  plural3rdPerson: Word('проскакивают', 5),
  masculinePast: Word('проскакивал', 5),
  femininePast: Word('проскакивала', 5),
  neuterPast: Word('проскакивало', 5),
  pluralPast: Word('проскакивали', 5),
  imperativeInformal: Word('проскакивай', 5),
  imperativeFormal: Word('проскакивайте', 5),
  imperfect: [],
};

perfectVerbs.set(проскакивать.name.text, проскакивать);

export { проскакивать };