import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырезать: PerfectVerb = {
  name: Word('вырезать', 5),
  singular1stPerson: Word('вырезаю', 5),
  singular2ndPerson: Word('вырезаешь', 5),
  singular3rdPerson: Word('вырезает', 5),
  plural1stPerson: Word('вырезаем', 5),
  plural2ndPerson: Word('вырезаете', 5),
  plural3rdPerson: Word('вырезают', 5),
  masculinePast: Word('вырезал', 5),
  femininePast: Word('вырезала', 5),
  neuterPast: Word('вырезало', 5),
  pluralPast: Word('вырезали', 5),
  imperativeInformal: Word('вырезай', 5),
  imperativeFormal: Word('вырезайте', 5),
  imperfect: [],
};

perfectVerbs.set(вырезать.name.text, вырезать);

export { вырезать };