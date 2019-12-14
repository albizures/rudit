import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздобреть: PerfectVerb = {
  name: Word('раздобреть', 7),
  singular1stPerson: Word('раздобрею', 7),
  singular2ndPerson: Word('раздобреешь', 7),
  singular3rdPerson: Word('раздобреет', 7),
  plural1stPerson: Word('раздобреем', 7),
  plural2ndPerson: Word('раздобреете', 7),
  plural3rdPerson: Word('раздобреют', 7),
  masculinePast: Word('раздобрел', 7),
  femininePast: Word('раздобрела', 7),
  neuterPast: Word('раздобрело', 7),
  pluralPast: Word('раздобрели', 7),
  imperativeInformal: Word('раздобрей', 7),
  imperativeFormal: Word('раздобрейте', 7),
  imperfect: [],
};

perfectVerbs.set(раздобреть.name.text, раздобреть);

export { раздобреть };