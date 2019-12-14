import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмести: PerfectVerb = {
  name: Word('отмести', 6),
  singular1stPerson: Word('отмету', 5),
  singular2ndPerson: Word('отметёшь', 5),
  singular3rdPerson: Word('отметёт', 5),
  plural1stPerson: Word('отметём', 5),
  plural2ndPerson: Word('отметёте', 5),
  plural3rdPerson: Word('отметут', 5),
  masculinePast: Word('отмёл', 3),
  femininePast: Word('отмела', 5),
  neuterPast: Word('отмело', 5),
  pluralPast: Word('отмели', 5),
  imperativeInformal: Word('отмети', 5),
  imperativeFormal: Word('отметите', 5),
  imperfect: [],
};

perfectVerbs.set(отмести.name.text, отмести);

export { отмести };