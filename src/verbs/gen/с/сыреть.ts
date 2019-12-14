import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сыреть: PerfectVerb = {
  name: Word('сыреть', 3),
  singular1stPerson: Word('сырею', 3),
  singular2ndPerson: Word('сыреешь', 3),
  singular3rdPerson: Word('сыреет', 3),
  plural1stPerson: Word('сыреем', 3),
  plural2ndPerson: Word('сыреете', 3),
  plural3rdPerson: Word('сыреют', 3),
  masculinePast: Word('сырел', 3),
  femininePast: Word('сырела', 3),
  neuterPast: Word('сырело', 3),
  pluralPast: Word('сырели', 3),
  imperativeInformal: Word('сырей', 3),
  imperativeFormal: Word('сырейте', 3),
  imperfect: [],
};

perfectVerbs.set(сыреть.name.text, сыреть);

export { сыреть };