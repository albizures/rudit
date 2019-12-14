import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забирать: PerfectVerb = {
  name: Word('забирать', 5),
  singular1stPerson: Word('забираю', 5),
  singular2ndPerson: Word('забираешь', 5),
  singular3rdPerson: Word('забирает', 5),
  plural1stPerson: Word('забираем', 5),
  plural2ndPerson: Word('забираете', 5),
  plural3rdPerson: Word('забирают', 5),
  masculinePast: Word('забирал', 5),
  femininePast: Word('забирала', 5),
  neuterPast: Word('забирало', 5),
  pluralPast: Word('забирали', 5),
  imperativeInformal: Word('забирай', 5),
  imperativeFormal: Word('забирайте', 5),
  imperfect: ['забрать'],
};

perfectVerbs.set(забирать.name.text, забирать);

export { забирать };