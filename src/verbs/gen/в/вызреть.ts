import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вызреть: PerfectVerb = {
  name: Word('вызреть', 1),
  singular1stPerson: Word('вызрею', 1),
  singular2ndPerson: Word('вызреешь', 1),
  singular3rdPerson: Word('вызреет', 1),
  plural1stPerson: Word('вызреем', 1),
  plural2ndPerson: Word('вызреете', 1),
  plural3rdPerson: Word('вызреют', 1),
  masculinePast: Word('вызрел', 1),
  femininePast: Word('вызрела', 1),
  neuterPast: Word('вызрело', 1),
  pluralPast: Word('вызрели', 1),
  imperativeInformal: Word('вызрей', 1),
  imperativeFormal: Word('вызрейте', 1),
  imperfect: [],
};

perfectVerbs.set(вызреть.name.text, вызреть);

export { вызреть };