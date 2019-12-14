import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const склевать: PerfectVerb = {
  name: Word('склевать', 5),
  singular1stPerson: Word('склюю', 4),
  singular2ndPerson: Word('склюёшь', 3),
  singular3rdPerson: Word('склюёт', 3),
  plural1stPerson: Word('склюём', 3),
  plural2ndPerson: Word('склюёте', 6),
  plural3rdPerson: Word('склюют', 4),
  masculinePast: Word('склевал', 5),
  femininePast: Word('склевала', 5),
  neuterPast: Word('склевало', 5),
  pluralPast: Word('склевали', 5),
  imperativeInformal: Word('склюй', 3),
  imperativeFormal: Word('склюйте', 3),
  imperfect: [],
};

perfectVerbs.set(склевать.name.text, склевать);

export { склевать };