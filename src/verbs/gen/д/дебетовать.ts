import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дебетовать: PerfectVerb = {
  name: Word('дебетовать', 7),
  singular1stPerson: Word('дебетую', 5),
  singular2ndPerson: Word('дебетуешь', 5),
  singular3rdPerson: Word('дебетует', 5),
  plural1stPerson: Word('дебетуем', 5),
  plural2ndPerson: Word('дебетуете', 5),
  plural3rdPerson: Word('дебетуют', 5),
  masculinePast: Word('дебетовал', 7),
  femininePast: Word('дебетовала', 7),
  neuterPast: Word('дебетовало', 7),
  pluralPast: Word('дебетовали', 7),
  imperativeInformal: Word('дебетуй', 5),
  imperativeFormal: Word('дебетуйте', 5),
  imperfect: [],
};

perfectVerbs.set(дебетовать.name.text, дебетовать);

export { дебетовать };