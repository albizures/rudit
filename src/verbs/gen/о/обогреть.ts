import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обогреть: PerfectVerb = {
  name: Word('обогреть', 5),
  singular1stPerson: Word('обогрею', 5),
  singular2ndPerson: Word('обогреешь', 5),
  singular3rdPerson: Word('обогреет', 5),
  plural1stPerson: Word('обогреем', 5),
  plural2ndPerson: Word('обогреете', 5),
  plural3rdPerson: Word('обогреют', 5),
  masculinePast: Word('обогрел', 5),
  femininePast: Word('обогрела', 5),
  neuterPast: Word('обогрело', 5),
  pluralPast: Word('обогрели', 5),
  imperativeInformal: Word('обогрей', 5),
  imperativeFormal: Word('обогрейте', 5),
  imperfect: [],
};

perfectVerbs.set(обогреть.name.text, обогреть);

export { обогреть };