import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уволакивать: PerfectVerb = {
  name: Word('уволакивать', 4),
  singular1stPerson: Word('уволакиваю', 4),
  singular2ndPerson: Word('уволакиваешь', 4),
  singular3rdPerson: Word('уволакивает', 4),
  plural1stPerson: Word('уволакиваем', 4),
  plural2ndPerson: Word('уволакиваете', 4),
  plural3rdPerson: Word('уволакивают', 4),
  masculinePast: Word('уволакивал', 4),
  femininePast: Word('уволакивала', 4),
  neuterPast: Word('уволакивало', 4),
  pluralPast: Word('уволакивали', 4),
  imperativeInformal: Word('уволакивай', 4),
  imperativeFormal: Word('уволакивайте', 4),
  imperfect: [],
};

perfectVerbs.set(уволакивать.name.text, уволакивать);

export { уволакивать };