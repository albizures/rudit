import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забаллотировать: PerfectVerb = {
  name: Word('забаллотировать', 8),
  singular1stPerson: Word('забаллотирую', 8),
  singular2ndPerson: Word('забаллотируешь', 8),
  singular3rdPerson: Word('забаллотирует', 8),
  plural1stPerson: Word('забаллотируем', 8),
  plural2ndPerson: Word('забаллотируете', 8),
  plural3rdPerson: Word('забаллотируют', 8),
  masculinePast: Word('забаллотировал', 8),
  femininePast: Word('забаллотировала', 8),
  neuterPast: Word('забаллотировало', 8),
  pluralPast: Word('забаллотировали', 8),
  imperativeInformal: Word('забаллотируй', 8),
  imperativeFormal: Word('забаллотируйте', 8),
  imperfect: [],
};

perfectVerbs.set(забаллотировать.name.text, забаллотировать);

export { забаллотировать };