import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вползать: PerfectVerb = {
  name: Word('вползать', 5),
  singular1stPerson: Word('вползаю', 5),
  singular2ndPerson: Word('вползаешь', 5),
  singular3rdPerson: Word('вползает', 5),
  plural1stPerson: Word('вползаем', 5),
  plural2ndPerson: Word('вползаете', 5),
  plural3rdPerson: Word('вползают', 5),
  masculinePast: Word('вползал', 5),
  femininePast: Word('вползала', 5),
  neuterPast: Word('вползало', 5),
  pluralPast: Word('вползали', 5),
  imperativeInformal: Word('вползай', 5),
  imperativeFormal: Word('вползайте', 5),
  imperfect: [],
};

perfectVerbs.set(вползать.name.text, вползать);

export { вползать };