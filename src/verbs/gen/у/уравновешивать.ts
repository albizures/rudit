import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уравновешивать: PerfectVerb = {
  name: Word('уравновешивать', 7),
  singular1stPerson: Word('уравновешиваю', 7),
  singular2ndPerson: Word('уравновешиваешь', 7),
  singular3rdPerson: Word('уравновешивает', 7),
  plural1stPerson: Word('уравновешиваем', 7),
  plural2ndPerson: Word('уравновешиваете', 7),
  plural3rdPerson: Word('уравновешивают', 7),
  masculinePast: Word('уравновешивал', 7),
  femininePast: Word('уравновешивала', 7),
  neuterPast: Word('уравновешивало', 7),
  pluralPast: Word('уравновешивали', 7),
  imperativeInformal: Word('уравновешивай', 7),
  imperativeFormal: Word('уравновешивайте', 7),
  imperfect: [],
};

perfectVerbs.set(уравновешивать.name.text, уравновешивать);

export { уравновешивать };