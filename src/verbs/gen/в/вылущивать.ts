import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылущивать: PerfectVerb = {
  name: Word('вылущивать', 3),
  singular1stPerson: Word('вылущиваю', 3),
  singular2ndPerson: Word('вылущиваешь', 3),
  singular3rdPerson: Word('вылущивает', 3),
  plural1stPerson: Word('вылущиваем', 3),
  plural2ndPerson: Word('вылущиваете', 3),
  plural3rdPerson: Word('вылущивают', 3),
  masculinePast: Word('вылущивал', 3),
  femininePast: Word('вылущивала', 3),
  neuterPast: Word('вылущивало', 3),
  pluralPast: Word('вылущивали', 3),
  imperativeInformal: Word('вылущивай', 3),
  imperativeFormal: Word('вылущивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вылущивать.name.text, вылущивать);

export { вылущивать };