import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отогреть: PerfectVerb = {
  name: Word('отогреть', 5),
  singular1stPerson: Word('отогрею', 5),
  singular2ndPerson: Word('отогреешь', 5),
  singular3rdPerson: Word('отогреет', 5),
  plural1stPerson: Word('отогреем', 5),
  plural2ndPerson: Word('отогреете', 5),
  plural3rdPerson: Word('отогреют', 5),
  masculinePast: Word('отогрел', 5),
  femininePast: Word('отогрела', 5),
  neuterPast: Word('отогрело', 5),
  pluralPast: Word('отогрели', 5),
  imperativeInformal: Word('отогрей', 5),
  imperativeFormal: Word('отогрейте', 5),
  imperfect: [],
};

perfectVerbs.set(отогреть.name.text, отогреть);

export { отогреть };