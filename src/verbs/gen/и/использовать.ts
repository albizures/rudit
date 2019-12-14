import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const использовать: PerfectVerb = {
  name: Word('использовать', 3),
  singular1stPerson: Word('использую', 3),
  singular2ndPerson: Word('используешь', 3),
  singular3rdPerson: Word('использует', 3),
  plural1stPerson: Word('используем', 3),
  plural2ndPerson: Word('используете', 3),
  plural3rdPerson: Word('используют', 3),
  masculinePast: Word('использовал', 3),
  femininePast: Word('использовала', 3),
  neuterPast: Word('использовало', 3),
  pluralPast: Word('использовали', 3),
  imperativeInformal: Word('используй', 3),
  imperativeFormal: Word('используйте', 3),
  imperfect: [],
};

perfectVerbs.set(использовать.name.text, использовать);

export { использовать };