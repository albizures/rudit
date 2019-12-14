import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтрепать: PerfectVerb = {
  name: Word('обтрепать', 6),
  singular1stPerson: Word('обтреплю', 7),
  singular2ndPerson: Word('обтреплешь', 4),
  singular3rdPerson: Word('обтреплет', 4),
  plural1stPerson: Word('обтреплем', 4),
  plural2ndPerson: Word('обтреплете', 4),
  plural3rdPerson: Word('обтреплют', 4),
  masculinePast: Word('обтрепал', 6),
  femininePast: Word('обтрепала', 6),
  neuterPast: Word('обтрепало', 6),
  pluralPast: Word('обтрепали', 6),
  imperativeInformal: Word('обтрепли', 7),
  imperativeFormal: Word('обтреплите', 7),
  imperfect: [],
};

perfectVerbs.set(обтрепать.name.text, обтрепать);

export { обтрепать };