import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скликать: PerfectVerb = {
  name: Word('скликать', 3),
  singular1stPerson: Word('скличу', 3),
  singular2ndPerson: Word('скличешь', 3),
  singular3rdPerson: Word('скличет', 3),
  plural1stPerson: Word('скличем', 3),
  plural2ndPerson: Word('скличете', 3),
  plural3rdPerson: Word('скличут', 3),
  masculinePast: Word('скликал', 3),
  femininePast: Word('скликала', 3),
  neuterPast: Word('скликало', 3),
  pluralPast: Word('скликали', 3),
  imperativeInformal: Word('скличь', 3),
  imperativeFormal: Word('скличьте', 3),
  imperfect: [],
};

perfectVerbs.set(скликать.name.text, скликать);

export { скликать };