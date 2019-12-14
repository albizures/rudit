import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отозвать: PerfectVerb = {
  name: Word('отозвать', 5),
  singular1stPerson: Word('отзову', 5),
  singular2ndPerson: Word('отзовёшь', 5),
  singular3rdPerson: Word('отзовёт', 5),
  plural1stPerson: Word('отзовём', 5),
  plural2ndPerson: Word('отзовёте', 5),
  plural3rdPerson: Word('отзовут', 5),
  masculinePast: Word('отозвал', 5),
  femininePast: Word('отозвала', 7),
  neuterPast: Word('отозвало', 5),
  pluralPast: Word('отозвали', 5),
  imperativeInformal: Word('отзови', 5),
  imperativeFormal: Word('отзовите', 5),
  imperfect: [],
};

perfectVerbs.set(отозвать.name.text, отозвать);

export { отозвать };