import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскакивать: PerfectVerb = {
  name: Word('вскакивать', 3),
  singular1stPerson: Word('вскакиваю', 3),
  singular2ndPerson: Word('вскакиваешь', 3),
  singular3rdPerson: Word('вскакивает', 3),
  plural1stPerson: Word('вскакиваем', 3),
  plural2ndPerson: Word('вскакиваете', 3),
  plural3rdPerson: Word('вскакивают', 3),
  masculinePast: Word('вскакивал', 3),
  femininePast: Word('вскакивала', 3),
  neuterPast: Word('вскакивало', 3),
  pluralPast: Word('вскакивали', 3),
  imperativeInformal: Word('вскакивай', 3),
  imperativeFormal: Word('вскакивайте', 3),
  imperfect: ['вскочить'],
};

perfectVerbs.set(вскакивать.name.text, вскакивать);

export { вскакивать };