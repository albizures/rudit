import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заготавливать: PerfectVerb = {
  name: Word('заготавливать', 5),
  singular1stPerson: Word('заготавливаю', 5),
  singular2ndPerson: Word('заготавливаешь', 5),
  singular3rdPerson: Word('заготавливает', 5),
  plural1stPerson: Word('заготавливаем', 5),
  plural2ndPerson: Word('заготавливаете', 5),
  plural3rdPerson: Word('заготавливают', 5),
  masculinePast: Word('заготавливал', 5),
  femininePast: Word('заготавливала', 5),
  neuterPast: Word('заготавливало', 5),
  pluralPast: Word('заготавливали', 5),
  imperativeInformal: Word('заготавливай', 5),
  imperativeFormal: Word('заготавливайте', 5),
  imperfect: [],
};

perfectVerbs.set(заготавливать.name.text, заготавливать);

export { заготавливать };