import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накликать: PerfectVerb = {
  name: Word('накликать', 4),
  singular1stPerson: Word('накличу', 4),
  singular2ndPerson: Word('накличешь', 4),
  singular3rdPerson: Word('накличет', 4),
  plural1stPerson: Word('накличем', 4),
  plural2ndPerson: Word('накличете', 4),
  plural3rdPerson: Word('накличут', 4),
  masculinePast: Word('накликал', 4),
  femininePast: Word('накликала', 4),
  neuterPast: Word('накликало', 4),
  pluralPast: Word('накликали', 4),
  imperativeInformal: Word('накличь', 4),
  imperativeFormal: Word('накличьте', 4),
  imperfect: [],
};

perfectVerbs.set(накликать.name.text, накликать);

export { накликать };