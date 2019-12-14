import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замести: PerfectVerb = {
  name: Word('замести', 6),
  singular1stPerson: Word('замету', 5),
  singular2ndPerson: Word('заметёшь', 5),
  singular3rdPerson: Word('заметёт', 5),
  plural1stPerson: Word('заметём', 5),
  plural2ndPerson: Word('заметёте', 5),
  plural3rdPerson: Word('заметут', 5),
  masculinePast: Word('замёл', 3),
  femininePast: Word('замела', 5),
  neuterPast: Word('замело', 5),
  pluralPast: Word('замели', 5),
  imperativeInformal: Word('замети', 5),
  imperativeFormal: Word('заметите', 5),
  imperfect: [],
};

perfectVerbs.set(замести.name.text, замести);

export { замести };