import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const даровать: PerfectVerb = {
  name: Word('даровать', 5),
  singular1stPerson: Word('дарую', 3),
  singular2ndPerson: Word('даруешь', 3),
  singular3rdPerson: Word('дарует', 3),
  plural1stPerson: Word('даруем', 3),
  plural2ndPerson: Word('даруете', 3),
  plural3rdPerson: Word('даруют', 3),
  masculinePast: Word('даровал', 5),
  femininePast: Word('даровала', 5),
  neuterPast: Word('даровало', 5),
  pluralPast: Word('даровали', 5),
  imperativeInformal: Word('даруй', 3),
  imperativeFormal: Word('даруйте', 3),
  imperfect: [],
};

perfectVerbs.set(даровать.name.text, даровать);

export { даровать };