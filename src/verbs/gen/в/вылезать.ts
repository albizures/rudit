import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылезать: PerfectVerb = {
  name: Word('вылезать', 5),
  singular1stPerson: Word('вылезаю', 5),
  singular2ndPerson: Word('вылезаешь', 5),
  singular3rdPerson: Word('вылезает', 5),
  plural1stPerson: Word('вылезаем', 5),
  plural2ndPerson: Word('вылезаете', 5),
  plural3rdPerson: Word('вылезают', 5),
  masculinePast: Word('вылезал', 5),
  femininePast: Word('вылезала', 5),
  neuterPast: Word('вылезало', 5),
  pluralPast: Word('вылезали', 5),
  imperativeInformal: Word('вылезай', 5),
  imperativeFormal: Word('вылезайте', 5),
  imperfect: [],
};

perfectVerbs.set(вылезать.name.text, вылезать);

export { вылезать };