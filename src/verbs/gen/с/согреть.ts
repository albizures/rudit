import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const согреть: PerfectVerb = {
  name: Word('согреть', 4),
  singular1stPerson: Word('согрею', 4),
  singular2ndPerson: Word('согреешь', 4),
  singular3rdPerson: Word('согреет', 4),
  plural1stPerson: Word('согреем', 4),
  plural2ndPerson: Word('согреете', 4),
  plural3rdPerson: Word('согреют', 4),
  masculinePast: Word('согрел', 4),
  femininePast: Word('согрела', 4),
  neuterPast: Word('согрело', 4),
  pluralPast: Word('согрели', 4),
  imperativeInformal: Word('согрей', 4),
  imperativeFormal: Word('согрейте', 4),
  imperfect: [],
};

perfectVerbs.set(согреть.name.text, согреть);

export { согреть };