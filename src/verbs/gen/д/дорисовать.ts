import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорисовать: PerfectVerb = {
  name: Word('дорисовать', 7),
  singular1stPerson: Word('дорисую', 5),
  singular2ndPerson: Word('дорисуешь', 5),
  singular3rdPerson: Word('дорисует', 5),
  plural1stPerson: Word('дорисуем', 5),
  plural2ndPerson: Word('дорисуете', 5),
  plural3rdPerson: Word('дорисуют', 5),
  masculinePast: Word('дорисовал', 7),
  femininePast: Word('дорисовала', 7),
  neuterPast: Word('дорисовало', 7),
  pluralPast: Word('дорисовали', 7),
  imperativeInformal: Word('дорисуй', 5),
  imperativeFormal: Word('дорисуйте', 5),
  imperfect: [],
};

perfectVerbs.set(дорисовать.name.text, дорисовать);

export { дорисовать };