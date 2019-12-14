import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разжиреть: PerfectVerb = {
  name: Word('разжиреть', 6),
  singular1stPerson: Word('разжирею', 6),
  singular2ndPerson: Word('разжиреешь', 6),
  singular3rdPerson: Word('разжиреет', 6),
  plural1stPerson: Word('разжиреем', 6),
  plural2ndPerson: Word('разжиреете', 6),
  plural3rdPerson: Word('разжиреют', 6),
  masculinePast: Word('разжирел', 6),
  femininePast: Word('разжирела', 6),
  neuterPast: Word('разжирело', 6),
  pluralPast: Word('разжирели', 6),
  imperativeInformal: Word('разжирей', 6),
  imperativeFormal: Word('разжирейте', 6),
  imperfect: [],
};

perfectVerbs.set(разжиреть.name.text, разжиреть);

export { разжиреть };