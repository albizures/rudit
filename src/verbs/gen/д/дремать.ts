import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дремать: PerfectVerb = {
  name: Word('дремать', 4),
  singular1stPerson: Word('дремлю', 5),
  singular2ndPerson: Word('дремлешь', 2),
  singular3rdPerson: Word('дремлет', 2),
  plural1stPerson: Word('дремлем', 2),
  plural2ndPerson: Word('дремлете', 2),
  plural3rdPerson: Word('дремлют', 2),
  masculinePast: Word('дремал', 4),
  femininePast: Word('дремала', 4),
  neuterPast: Word('дремало', 4),
  pluralPast: Word('дремали', 4),
  imperativeInformal: Word('дремли', 5),
  imperativeFormal: Word('дремлите', 5),
  imperfect: ['подремать','задремать','вздремнуть'],
};

perfectVerbs.set(дремать.name.text, дремать);

export { дремать };