import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угрюметь: PerfectVerb = {
  name: Word('угрюметь', 3),
  singular1stPerson: Word('угрюмею', 3),
  singular2ndPerson: Word('угрюмеешь', 3),
  singular3rdPerson: Word('угрюмеет', 3),
  plural1stPerson: Word('угрюмеем', 3),
  plural2ndPerson: Word('угрюмеете', 3),
  plural3rdPerson: Word('угрюмеют', 3),
  masculinePast: Word('угрюмел', 3),
  femininePast: Word('угрюмела', 3),
  neuterPast: Word('угрюмело', 3),
  pluralPast: Word('угрюмели', 3),
  imperativeInformal: Word('угрюмей', 3),
  imperativeFormal: Word('угрюмейте', 3),
  imperfect: [],
};

perfectVerbs.set(угрюметь.name.text, угрюметь);

export { угрюметь };