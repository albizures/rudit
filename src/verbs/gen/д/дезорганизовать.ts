import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дезорганизовать: PerfectVerb = {
  name: Word('дезорганизовать', 12),
  singular1stPerson: Word('дезорганизую', 10),
  singular2ndPerson: Word('дезорганизуешь', 10),
  singular3rdPerson: Word('дезорганизует', 10),
  plural1stPerson: Word('дезорганизуем', 10),
  plural2ndPerson: Word('дезорганизуете', 10),
  plural3rdPerson: Word('дезорганизуют', 10),
  masculinePast: Word('дезорганизовал', 12),
  femininePast: Word('дезорганизовала', 12),
  neuterPast: Word('дезорганизовало', 12),
  pluralPast: Word('дезорганизовали', 12),
  imperativeInformal: Word('дезорганизуй', 10),
  imperativeFormal: Word('дезорганизуйте', 10),
  imperfect: [],
};

perfectVerbs.set(дезорганизовать.name.text, дезорганизовать);

export { дезорганизовать };