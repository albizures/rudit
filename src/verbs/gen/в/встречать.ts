import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встречать: PerfectVerb = {
  name: Word('встречать', 6),
  singular1stPerson: Word('встречаю', 6),
  singular2ndPerson: Word('встречаешь', 6),
  singular3rdPerson: Word('встречает', 6),
  plural1stPerson: Word('встречаем', 6),
  plural2ndPerson: Word('встречаете', 6),
  plural3rdPerson: Word('встречают', 6),
  masculinePast: Word('встречал', 6),
  femininePast: Word('встречала', 6),
  neuterPast: Word('встречало', 6),
  pluralPast: Word('встречали', 6),
  imperativeInformal: Word('встречай', 6),
  imperativeFormal: Word('встречайте', 6),
  imperfect: ['встретить'],
};

perfectVerbs.set(встречать.name.text, встречать);

export { встречать };