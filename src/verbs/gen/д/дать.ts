import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дать: PerfectVerb = {
  name: Word('дать', 1),
  singular1stPerson: Word('дам', 1),
  singular2ndPerson: Word('дашь', 1),
  singular3rdPerson: Word('даст', 1),
  plural1stPerson: Word('дадим', 3),
  plural2ndPerson: Word('дадите', 3),
  plural3rdPerson: Word('дадут', 3),
  masculinePast: Word('дал', 1),
  femininePast: Word('дала', 3),
  neuterPast: Word('дало,дало'', 1),
  pluralPast: Word('дали', 1),
  imperativeInformal: Word('дай', 1),
  imperativeFormal: Word('дайте', 1),
  imperfect: ['давать'],
};

perfectVerbs.set(дать.name.text, дать);

export { дать };