import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загружать: PerfectVerb = {
  name: Word('загружать', 6),
  singular1stPerson: Word('загружаю', 6),
  singular2ndPerson: Word('загружаешь', 6),
  singular3rdPerson: Word('загружает', 6),
  plural1stPerson: Word('загружаем', 6),
  plural2ndPerson: Word('загружаете', 6),
  plural3rdPerson: Word('загружают', 6),
  masculinePast: Word('загружал', 6),
  femininePast: Word('загружала', 6),
  neuterPast: Word('загружало', 6),
  pluralPast: Word('загружали', 6),
  imperativeInformal: Word('загружай', 6),
  imperativeFormal: Word('загружайте', 6),
  imperfect: [],
};

perfectVerbs.set(загружать.name.text, загружать);

export { загружать };