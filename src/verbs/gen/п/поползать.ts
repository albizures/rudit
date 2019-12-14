import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поползать: PerfectVerb = {
  name: Word('поползать', 3),
  singular1stPerson: Word('поползаю', 3),
  singular2ndPerson: Word('поползаешь', 3),
  singular3rdPerson: Word('поползает', 3),
  plural1stPerson: Word('поползаем', 3),
  plural2ndPerson: Word('поползаете', 3),
  plural3rdPerson: Word('поползают', 3),
  masculinePast: Word('поползал', 3),
  femininePast: Word('поползала', 3),
  neuterPast: Word('поползало', 3),
  pluralPast: Word('поползали', 3),
  imperativeInformal: Word('поползай', 3),
  imperativeFormal: Word('поползайте', 3),
  imperfect: [],
};

perfectVerbs.set(поползать.name.text, поползать);

export { поползать };