import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присмиреть: PerfectVerb = {
  name: Word('присмиреть', 7),
  singular1stPerson: Word('присмирею', 7),
  singular2ndPerson: Word('присмиреешь', 7),
  singular3rdPerson: Word('присмиреет', 7),
  plural1stPerson: Word('присмиреем', 7),
  plural2ndPerson: Word('присмиреете', 7),
  plural3rdPerson: Word('присмиреют', 7),
  masculinePast: Word('присмирел', 7),
  femininePast: Word('присмирела', 7),
  neuterPast: Word('присмирело', 7),
  pluralPast: Word('присмирели', 7),
  imperativeInformal: Word('присмирей', 7),
  imperativeFormal: Word('присмирейте', 7),
  imperfect: [],
};

perfectVerbs.set(присмиреть.name.text, присмиреть);

export { присмиреть };