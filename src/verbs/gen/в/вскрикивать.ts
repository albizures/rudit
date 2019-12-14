import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскрикивать: PerfectVerb = {
  name: Word('вскрикивать', 4),
  singular1stPerson: Word('вскрикиваю', 4),
  singular2ndPerson: Word('вскрикиваешь', 4),
  singular3rdPerson: Word('вскрикивает', 4),
  plural1stPerson: Word('вскрикиваем', 4),
  plural2ndPerson: Word('вскрикиваете', 4),
  plural3rdPerson: Word('вскрикивают', 4),
  masculinePast: Word('вскрикивал', 4),
  femininePast: Word('вскрикивала', 4),
  neuterPast: Word('вскрикивало', 4),
  pluralPast: Word('вскрикивали', 4),
  imperativeInformal: Word('вскрикивай', 4),
  imperativeFormal: Word('вскрикивайте', 4),
  imperfect: [],
};

perfectVerbs.set(вскрикивать.name.text, вскрикивать);

export { вскрикивать };