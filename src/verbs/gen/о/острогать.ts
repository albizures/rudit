import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const острогать: PerfectVerb = {
  name: Word('острогать', 6),
  singular1stPerson: Word('острогаю', 6),
  singular2ndPerson: Word('острогаешь', 6),
  singular3rdPerson: Word('острогает', 6),
  plural1stPerson: Word('острогаем', 6),
  plural2ndPerson: Word('острогаете', 6),
  plural3rdPerson: Word('острогают', 6),
  masculinePast: Word('острогал', 6),
  femininePast: Word('острогала', 6),
  neuterPast: Word('острогало', 6),
  pluralPast: Word('острогали', 6),
  imperativeInformal: Word('острогай', 6),
  imperativeFormal: Word('острогайте', 6),
  imperfect: [],
};

perfectVerbs.set(острогать.name.text, острогать);

export { острогать };