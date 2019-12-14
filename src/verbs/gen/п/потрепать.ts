import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потрепать: PerfectVerb = {
  name: Word('потрепать', 6),
  singular1stPerson: Word('потреплю', 7),
  singular2ndPerson: Word('потреплешь', 4),
  singular3rdPerson: Word('потреплет', 4),
  plural1stPerson: Word('потреплем', 4),
  plural2ndPerson: Word('потреплете', 4),
  plural3rdPerson: Word('потреплют', 4),
  masculinePast: Word('потрепал', 6),
  femininePast: Word('потрепала', 6),
  neuterPast: Word('потрепало', 6),
  pluralPast: Word('потрепали', 6),
  imperativeInformal: Word('потрепли', 7),
  imperativeFormal: Word('потреплите', 7),
  imperfect: [],
};

perfectVerbs.set(потрепать.name.text, потрепать);

export { потрепать };