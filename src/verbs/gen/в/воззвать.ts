import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воззвать: PerfectVerb = {
  name: Word('воззвать', 5),
  singular1stPerson: Word('воззову', 6),
  singular2ndPerson: Word('воззовёшь', 1),
  singular3rdPerson: Word('воззовёт', 1),
  plural1stPerson: Word('воззовём', 1),
  plural2ndPerson: Word('воззовёте', 8),
  plural3rdPerson: Word('воззовут', 6),
  masculinePast: Word('воззвал', 5),
  femininePast: Word('воззвала', 5),
  neuterPast: Word('воззвало', 5),
  pluralPast: Word('воззвали', 5),
  imperativeInformal: Word('воззови', 6),
  imperativeFormal: Word('воззовите', 6),
  imperfect: [],
};

perfectVerbs.set(воззвать.name.text, воззвать);

export { воззвать };