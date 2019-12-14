import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дрожать: PerfectVerb = {
  name: Word('дрожать', 4),
  singular1stPerson: Word('дрожу', 4),
  singular2ndPerson: Word('дрожишь', 4),
  singular3rdPerson: Word('дрожит', 4),
  plural1stPerson: Word('дрожим', 4),
  plural2ndPerson: Word('дрожите', 4),
  plural3rdPerson: Word('дрожат', 4),
  masculinePast: Word('дрожал', 4),
  femininePast: Word('дрожала', 4),
  neuterPast: Word('дрожало', 4),
  pluralPast: Word('дрожали', 4),
  imperativeInformal: Word('дрожи', 4),
  imperativeFormal: Word('дрожите', 4),
  imperfect: [],
};

perfectVerbs.set(дрожать.name.text, дрожать);

export { дрожать };