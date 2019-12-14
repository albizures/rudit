import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропеть: PerfectVerb = {
  name: Word('пропеть', 4),
  singular1stPerson: Word('пропою', 5),
  singular2ndPerson: Word('пропоёшь', 2),
  singular3rdPerson: Word('пропоёт', 2),
  plural1stPerson: Word('пропоём', 2),
  plural2ndPerson: Word('пропоёте', 7),
  plural3rdPerson: Word('пропоют', 5),
  masculinePast: Word('пропел', 4),
  femininePast: Word('пропела', 4),
  neuterPast: Word('пропело', 4),
  pluralPast: Word('пропели', 4),
  imperativeInformal: Word('пропой', 4),
  imperativeFormal: Word('пропойте', 4),
  imperfect: [],
};

perfectVerbs.set(пропеть.name.text, пропеть);

export { пропеть };