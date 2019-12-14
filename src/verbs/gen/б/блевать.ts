import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блевать: PerfectVerb = {
  name: Word('блевать', 4),
  singular1stPerson: Word('блюю', 3),
  singular2ndPerson: Word('блюёшь', 2),
  singular3rdPerson: Word('блюёт', 2),
  plural1stPerson: Word('блюём', 2),
  plural2ndPerson: Word('блюёте', 5),
  plural3rdPerson: Word('блюют', 3),
  masculinePast: Word('блевал', 4),
  femininePast: Word('блевала', 4),
  neuterPast: Word('блевало', 4),
  pluralPast: Word('блевали', 4),
  imperativeInformal: Word('блюй', 2),
  imperativeFormal: Word('блюйте', 2),
  imperfect: ['блевануть'],
};

perfectVerbs.set(блевать.name.text, блевать);

export { блевать };