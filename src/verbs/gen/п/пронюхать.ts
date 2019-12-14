import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пронюхать: PerfectVerb = {
  name: Word('пронюхать', 4),
  singular1stPerson: Word('пронюхаю', 4),
  singular2ndPerson: Word('пронюхаешь', 4),
  singular3rdPerson: Word('пронюхает', 4),
  plural1stPerson: Word('пронюхаем', 4),
  plural2ndPerson: Word('пронюхаете', 4),
  plural3rdPerson: Word('пронюхают', 4),
  masculinePast: Word('пронюхал', 4),
  femininePast: Word('пронюхала', 4),
  neuterPast: Word('пронюхало', 4),
  pluralPast: Word('пронюхали', 4),
  imperativeInformal: Word('пронюхай', 4),
  imperativeFormal: Word('пронюхайте', 4),
  imperfect: [],
};

perfectVerbs.set(пронюхать.name.text, пронюхать);

export { пронюхать };