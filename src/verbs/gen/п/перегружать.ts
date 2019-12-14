import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегружать: PerfectVerb = {
  name: Word('перегружать', 8),
  singular1stPerson: Word('перегружаю', 8),
  singular2ndPerson: Word('перегружаешь', 8),
  singular3rdPerson: Word('перегружает', 8),
  plural1stPerson: Word('перегружаем', 8),
  plural2ndPerson: Word('перегружаете', 8),
  plural3rdPerson: Word('перегружают', 8),
  masculinePast: Word('перегружал', 8),
  femininePast: Word('перегружала', 8),
  neuterPast: Word('перегружало', 8),
  pluralPast: Word('перегружали', 8),
  imperativeInformal: Word('перегружай', 8),
  imperativeFormal: Word('перегружайте', 8),
  imperfect: [],
};

perfectVerbs.set(перегружать.name.text, перегружать);

export { перегружать };