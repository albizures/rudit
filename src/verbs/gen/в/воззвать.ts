import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воззвать: PerfectVerb = {
  name: Word('воззвать', 5),
  singular1stPerson: Word('воззову', 6),
  singular2ndPerson: Word('воззовёшь', 6),
  singular3rdPerson: Word('воззовёт', 6),
  plural1stPerson: Word('воззовём', 6),
  plural2ndPerson: Word('воззовёте', 6),
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