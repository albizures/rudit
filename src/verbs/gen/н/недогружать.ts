import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недогружать: PerfectVerb = {
  name: Word('недогружать', 8),
  singular1stPerson: Word('недогружаю', 8),
  singular2ndPerson: Word('недогружаешь', 8),
  singular3rdPerson: Word('недогружает', 8),
  plural1stPerson: Word('недогружаем', 8),
  plural2ndPerson: Word('недогружаете', 8),
  plural3rdPerson: Word('недогружают', 8),
  masculinePast: Word('недогружал', 8),
  femininePast: Word('недогружала', 8),
  neuterPast: Word('недогружало', 8),
  pluralPast: Word('недогружали', 8),
  imperativeInformal: Word('недогружай', 8),
  imperativeFormal: Word('недогружайте', 8),
  imperfect: [],
};

perfectVerbs.set(недогружать.name.text, недогружать);

export { недогружать };