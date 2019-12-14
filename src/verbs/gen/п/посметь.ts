import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посметь: PerfectVerb = {
  name: Word('посметь', 4),
  singular1stPerson: Word('посмею', 4),
  singular2ndPerson: Word('посмеешь', 4),
  singular3rdPerson: Word('посмеет', 4),
  plural1stPerson: Word('посмеем', 4),
  plural2ndPerson: Word('посмеете', 4),
  plural3rdPerson: Word('посмеют', 4),
  masculinePast: Word('посмел', 4),
  femininePast: Word('посмела', 4),
  neuterPast: Word('посмело', 4),
  pluralPast: Word('посмели', 4),
  imperativeInformal: Word('посмей', 4),
  imperativeFormal: Word('посмейте', 4),
  imperfect: ['сметь'],
};

perfectVerbs.set(посметь.name.text, посметь);

export { посметь };