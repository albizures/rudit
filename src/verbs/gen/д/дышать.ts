import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дышать: PerfectVerb = {
  name: Word('дышать', 3),
  singular1stPerson: Word('дышу', 3),
  singular2ndPerson: Word('дышишь', 1),
  singular3rdPerson: Word('дышит', 1),
  plural1stPerson: Word('дышим', 1),
  plural2ndPerson: Word('дышите', 1),
  plural3rdPerson: Word('дышат', 1),
  masculinePast: Word('дышал', 3),
  femininePast: Word('дышала', 3),
  neuterPast: Word('дышало', 3),
  pluralPast: Word('дышали', 3),
  imperativeInformal: Word('дыши', 3),
  imperativeFormal: Word('дышите', 3),
  imperfect: ['подышать'],
};

perfectVerbs.set(дышать.name.text, дышать);

export { дышать };