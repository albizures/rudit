import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брести: PerfectVerb = {
  name: Word('брести', 5),
  singular1stPerson: Word('бреду', 4),
  singular2ndPerson: Word('бредёшь', 4),
  singular3rdPerson: Word('бредёт', 4),
  plural1stPerson: Word('бредём', 4),
  plural2ndPerson: Word('бредёте', 4),
  plural3rdPerson: Word('бредут', 4),
  masculinePast: Word('брёл', 2),
  femininePast: Word('брела', 4),
  neuterPast: Word('брело', 4),
  pluralPast: Word('брели', 4),
  imperativeInformal: Word('бреди', 4),
  imperativeFormal: Word('бредите', 4),
  imperfect: [],
};

perfectVerbs.set(брести.name.text, брести);

export { брести };