import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскрашивать: PerfectVerb = {
  name: Word('раскрашивать', 5),
  singular1stPerson: Word('раскрашиваю', 5),
  singular2ndPerson: Word('раскрашиваешь', 5),
  singular3rdPerson: Word('раскрашивает', 5),
  plural1stPerson: Word('раскрашиваем', 5),
  plural2ndPerson: Word('раскрашиваете', 5),
  plural3rdPerson: Word('раскрашивают', 5),
  masculinePast: Word('раскрашивал', 5),
  femininePast: Word('раскрашивала', 5),
  neuterPast: Word('раскрашивало', 5),
  pluralPast: Word('раскрашивали', 5),
  imperativeInformal: Word('раскрашивай', 5),
  imperativeFormal: Word('раскрашивайте', 5),
  imperfect: [],
};

perfectVerbs.set(раскрашивать.name.text, раскрашивать);

export { раскрашивать };