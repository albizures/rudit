import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плевать: PerfectVerb = {
  name: Word('плевать', 4),
  singular1stPerson: Word('плюю', 3),
  singular2ndPerson: Word('плюёшь', 2),
  singular3rdPerson: Word('плюёт', 2),
  plural1stPerson: Word('плюём', 2),
  plural2ndPerson: Word('плюёте', 5),
  plural3rdPerson: Word('плюют', 3),
  masculinePast: Word('плевал', 4),
  femininePast: Word('плевала', 4),
  neuterPast: Word('плевало', 4),
  pluralPast: Word('плевали', 4),
  imperativeInformal: Word('плюй', 2),
  imperativeFormal: Word('плюйте', 2),
  imperfect: ['плюнуть'],
};

perfectVerbs.set(плевать.name.text, плевать);

export { плевать };