import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забредать: PerfectVerb = {
  name: Word('забредать', 6),
  singular1stPerson: Word('забредаю', 6),
  singular2ndPerson: Word('забредаешь', 6),
  singular3rdPerson: Word('забредает', 6),
  plural1stPerson: Word('забредаем', 6),
  plural2ndPerson: Word('забредаете', 6),
  plural3rdPerson: Word('забредают', 6),
  masculinePast: Word('забредал', 6),
  femininePast: Word('забредала', 6),
  neuterPast: Word('забредало', 6),
  pluralPast: Word('забредали', 6),
  imperativeInformal: Word('забредай', 6),
  imperativeFormal: Word('забредайте', 6),
  imperfect: [],
};

perfectVerbs.set(забредать.name.text, забредать);

export { забредать };