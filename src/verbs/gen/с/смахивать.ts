import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смахивать: PerfectVerb = {
  name: Word('смахивать', 2),
  singular1stPerson: Word('смахиваю', 2),
  singular2ndPerson: Word('смахиваешь', 2),
  singular3rdPerson: Word('смахивает', 2),
  plural1stPerson: Word('смахиваем', 2),
  plural2ndPerson: Word('смахиваете', 2),
  plural3rdPerson: Word('смахивают', 2),
  masculinePast: Word('смахивал', 2),
  femininePast: Word('смахивала', 2),
  neuterPast: Word('смахивало', 2),
  pluralPast: Word('смахивали', 2),
  imperativeInformal: Word('смахивай', 2),
  imperativeFormal: Word('смахивайте', 2),
  imperfect: [],
};

perfectVerbs.set(смахивать.name.text, смахивать);

export { смахивать };