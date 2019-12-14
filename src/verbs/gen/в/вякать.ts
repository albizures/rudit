import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вякать: PerfectVerb = {
  name: Word('вякать', 1),
  singular1stPerson: Word('вякаю', 1),
  singular2ndPerson: Word('вякаешь', 1),
  singular3rdPerson: Word('вякает', 1),
  plural1stPerson: Word('вякаем', 1),
  plural2ndPerson: Word('вякаете', 1),
  plural3rdPerson: Word('вякают', 1),
  masculinePast: Word('вякал', 1),
  femininePast: Word('вякала', 1),
  neuterPast: Word('вякало', 1),
  pluralPast: Word('вякали', 1),
  imperativeInformal: Word('вякай', 1),
  imperativeFormal: Word('вякайте', 1),
  imperfect: [],
};

perfectVerbs.set(вякать.name.text, вякать);

export { вякать };