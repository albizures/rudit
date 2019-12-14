import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заботить: PerfectVerb = {
  name: Word('заботить', 3),
  singular1stPerson: Word('забочу', 3),
  singular2ndPerson: Word('заботишь', 3),
  singular3rdPerson: Word('заботит', 3),
  plural1stPerson: Word('заботим', 3),
  plural2ndPerson: Word('заботите', 3),
  plural3rdPerson: Word('заботят', 3),
  masculinePast: Word('заботил', 3),
  femininePast: Word('заботила', 3),
  neuterPast: Word('заботило', 3),
  pluralPast: Word('заботили', 3),
  imperativeInformal: Word('заботь', 3),
  imperativeFormal: Word('заботьте', 3),
  imperfect: [],
};

perfectVerbs.set(заботить.name.text, заботить);

export { заботить };