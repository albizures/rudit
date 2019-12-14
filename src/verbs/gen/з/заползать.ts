import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заползать: PerfectVerb = {
  name: Word('заползать', 3),
  singular1stPerson: Word('заползаю', 3),
  singular2ndPerson: Word('заползаешь', 3),
  singular3rdPerson: Word('заползает', 3),
  plural1stPerson: Word('заползаем', 3),
  plural2ndPerson: Word('заползаете', 3),
  plural3rdPerson: Word('заползают', 3),
  masculinePast: Word('заползал', 3),
  femininePast: Word('заползала', 3),
  neuterPast: Word('заползало', 3),
  pluralPast: Word('заползали', 3),
  imperativeInformal: Word('заползай', 3),
  imperativeFormal: Word('заползайте', 3),
  imperfect: [],
};

perfectVerbs.set(заползать.name.text, заползать);

export { заползать };