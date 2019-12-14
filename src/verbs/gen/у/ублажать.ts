import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ублажать: PerfectVerb = {
  name: Word('ублажать', 5),
  singular1stPerson: Word('ублажаю', 5),
  singular2ndPerson: Word('ублажаешь', 5),
  singular3rdPerson: Word('ублажает', 5),
  plural1stPerson: Word('ублажаем', 5),
  plural2ndPerson: Word('ублажаете', 5),
  plural3rdPerson: Word('ублажают', 5),
  masculinePast: Word('ублажал', 5),
  femininePast: Word('ублажала', 5),
  neuterPast: Word('ублажало', 5),
  pluralPast: Word('ублажали', 5),
  imperativeInformal: Word('ублажай', 5),
  imperativeFormal: Word('ублажайте', 5),
  imperfect: [],
};

perfectVerbs.set(ублажать.name.text, ублажать);

export { ублажать };