import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возвеличивать: PerfectVerb = {
  name: Word('возвеличивать', 6),
  singular1stPerson: Word('возвеличиваю', 6),
  singular2ndPerson: Word('возвеличиваешь', 6),
  singular3rdPerson: Word('возвеличивает', 6),
  plural1stPerson: Word('возвеличиваем', 6),
  plural2ndPerson: Word('возвеличиваете', 6),
  plural3rdPerson: Word('возвеличивают', 6),
  masculinePast: Word('возвеличивал', 6),
  femininePast: Word('возвеличивала', 6),
  neuterPast: Word('возвеличивало', 6),
  pluralPast: Word('возвеличивали', 6),
  imperativeInformal: Word('возвеличивай', 6),
  imperativeFormal: Word('возвеличивайте', 6),
  imperfect: [],
};

perfectVerbs.set(возвеличивать.name.text, возвеличивать);

export { возвеличивать };