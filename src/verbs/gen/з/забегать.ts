import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забегать: PerfectVerb = {
  name: Word('забегать', 3),
  singular1stPerson: Word('забегаю', 3),
  singular2ndPerson: Word('забегаешь', 3),
  singular3rdPerson: Word('забегает', 3),
  plural1stPerson: Word('забегаем', 3),
  plural2ndPerson: Word('забегаете', 3),
  plural3rdPerson: Word('забегают', 3),
  masculinePast: Word('забегал', 3),
  femininePast: Word('забегала', 3),
  neuterPast: Word('забегало', 3),
  pluralPast: Word('забегали', 3),
  imperativeInformal: Word('забегай', 3),
  imperativeFormal: Word('забегайте', 3),
  imperfect: [],
};

perfectVerbs.set(забегать.name.text, забегать);

export { забегать };