import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дребезжать: PerfectVerb = {
  name: Word('дребезжать', 7),
  singular1stPerson: Word('дребезжу', 7),
  singular2ndPerson: Word('дребезжишь', 7),
  singular3rdPerson: Word('дребезжит', 7),
  plural1stPerson: Word('дребезжим', 7),
  plural2ndPerson: Word('дребезжите', 7),
  plural3rdPerson: Word('дребезжат', 7),
  masculinePast: Word('дребезжал', 7),
  femininePast: Word('дребезжала', 7),
  neuterPast: Word('дребезжало', 7),
  pluralPast: Word('дребезжали', 7),
  imperativeInformal: Word('дребезжи', 7),
  imperativeFormal: Word('дребезжите', 7),
  imperfect: [],
};

perfectVerbs.set(дребезжать.name.text, дребезжать);

export { дребезжать };