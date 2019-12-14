import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разогреть: PerfectVerb = {
  name: Word('разогреть', 6),
  singular1stPerson: Word('разогрею', 6),
  singular2ndPerson: Word('разогреешь', 6),
  singular3rdPerson: Word('разогреет', 6),
  plural1stPerson: Word('разогреем', 6),
  plural2ndPerson: Word('разогреете', 6),
  plural3rdPerson: Word('разогреют', 6),
  masculinePast: Word('разогрел', 6),
  femininePast: Word('разогрела', 6),
  neuterPast: Word('разогрело', 6),
  pluralPast: Word('разогрели', 6),
  imperativeInformal: Word('разогрей', 6),
  imperativeFormal: Word('разогрейте', 6),
  imperfect: [],
};

perfectVerbs.set(разогреть.name.text, разогреть);

export { разогреть };