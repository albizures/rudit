import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дневать: PerfectVerb = {
  name: Word('дневать', 4),
  singular1stPerson: Word('днюю', 2),
  singular2ndPerson: Word('днюешь', 2),
  singular3rdPerson: Word('днюет', 2),
  plural1stPerson: Word('днюем', 2),
  plural2ndPerson: Word('днюете', 2),
  plural3rdPerson: Word('днюют', 2),
  masculinePast: Word('дневал', 4),
  femininePast: Word('дневала', 4),
  neuterPast: Word('дневало', 4),
  pluralPast: Word('дневали', 4),
  imperativeInformal: Word('днюй', 2),
  imperativeFormal: Word('днюйте', 2),
  imperfect: [],
};

perfectVerbs.set(дневать.name.text, дневать);

export { дневать };