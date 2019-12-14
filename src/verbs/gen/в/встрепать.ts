import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встрепать: PerfectVerb = {
  name: Word('встрепать', 6),
  singular1stPerson: Word('встреплю', 7),
  singular2ndPerson: Word('встреплешь', 4),
  singular3rdPerson: Word('встреплет', 4),
  plural1stPerson: Word('встреплем', 4),
  plural2ndPerson: Word('встреплете', 4),
  plural3rdPerson: Word('встреплют', 4),
  masculinePast: Word('встрепал', 6),
  femininePast: Word('встрепала', 6),
  neuterPast: Word('встрепало', 6),
  pluralPast: Word('встрепали', 6),
  imperativeInformal: Word('встрепли', 7),
  imperativeFormal: Word('встреплите', 7),
  imperfect: [],
};

perfectVerbs.set(встрепать.name.text, встрепать);

export { встрепать };