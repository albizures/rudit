import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клевать: PerfectVerb = {
  name: Word('клевать', 4),
  singular1stPerson: Word('клюю', 3),
  singular2ndPerson: Word('клюёшь', 3),
  singular3rdPerson: Word('клюёт', 3),
  plural1stPerson: Word('клюём', 3),
  plural2ndPerson: Word('клюёте', 3),
  plural3rdPerson: Word('клюют', 3),
  masculinePast: Word('клевал', 4),
  femininePast: Word('клевала', 4),
  neuterPast: Word('клевало', 4),
  pluralPast: Word('клевали', 4),
  imperativeInformal: Word('клюй', 2),
  imperativeFormal: Word('клюйте', 2),
  imperfect: ['клюнуть'],
};

perfectVerbs.set(клевать.name.text, клевать);

export { клевать };