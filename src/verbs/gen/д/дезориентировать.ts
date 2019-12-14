import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дезориентировать: PerfectVerb = {
  name: Word('дезориентировать', 9),
  singular1stPerson: Word('дезориентирую', 9),
  singular2ndPerson: Word('дезориентируешь', 9),
  singular3rdPerson: Word('дезориентирует', 9),
  plural1stPerson: Word('дезориентируем', 9),
  plural2ndPerson: Word('дезориентируете', 9),
  plural3rdPerson: Word('дезориентируют', 9),
  masculinePast: Word('дезориентировал', 9),
  femininePast: Word('дезориентировала', 9),
  neuterPast: Word('дезориентировало', 9),
  pluralPast: Word('дезориентировали', 9),
  imperativeInformal: Word('дезориентируй', 9),
  imperativeFormal: Word('дезориентируйте', 9),
  imperfect: [],
};

perfectVerbs.set(дезориентировать.name.text, дезориентировать);

export { дезориентировать };