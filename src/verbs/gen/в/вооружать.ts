import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вооружать: PerfectVerb = {
  name: Word('вооружать', 6),
  singular1stPerson: Word('вооружаю', 6),
  singular2ndPerson: Word('вооружаешь', 6),
  singular3rdPerson: Word('вооружает', 6),
  plural1stPerson: Word('вооружаем', 6),
  plural2ndPerson: Word('вооружаете', 6),
  plural3rdPerson: Word('вооружают', 6),
  masculinePast: Word('вооружал', 6),
  femininePast: Word('вооружала', 6),
  neuterPast: Word('вооружало', 6),
  pluralPast: Word('вооружали', 6),
  imperativeInformal: Word('вооружай', 6),
  imperativeFormal: Word('вооружайте', 6),
  imperfect: [],
};

perfectVerbs.set(вооружать.name.text, вооружать);

export { вооружать };