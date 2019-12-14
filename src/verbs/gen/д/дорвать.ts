import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорвать: PerfectVerb = {
  name: Word('дорвать', 4),
  singular1stPerson: Word('дорву', 4),
  singular2ndPerson: Word('дорвёшь', 4),
  singular3rdPerson: Word('дорвёт', 4),
  plural1stPerson: Word('дорвём', 4),
  plural2ndPerson: Word('дорвёте', 4),
  plural3rdPerson: Word('дорвут', 4),
  masculinePast: Word('дорвал', 4),
  femininePast: Word('дорвала', 6),
  neuterPast: Word('дорвало', 4),
  pluralPast: Word('дорвали', 4),
  imperativeInformal: Word('дорви', 4),
  imperativeFormal: Word('дорвите', 4),
  imperfect: [],
};

perfectVerbs.set(дорвать.name.text, дорвать);

export { дорвать };