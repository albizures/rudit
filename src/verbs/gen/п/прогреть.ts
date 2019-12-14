import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогреть: PerfectVerb = {
  name: Word('прогреть', 5),
  singular1stPerson: Word('прогрею', 5),
  singular2ndPerson: Word('прогреешь', 5),
  singular3rdPerson: Word('прогреет', 5),
  plural1stPerson: Word('прогреем', 5),
  plural2ndPerson: Word('прогреете', 5),
  plural3rdPerson: Word('прогреют', 5),
  masculinePast: Word('прогрел', 5),
  femininePast: Word('прогрела', 5),
  neuterPast: Word('прогрело', 5),
  pluralPast: Word('прогрели', 5),
  imperativeInformal: Word('прогрей', 5),
  imperativeFormal: Word('прогрейте', 5),
  imperfect: [],
};

perfectVerbs.set(прогреть.name.text, прогреть);

export { прогреть };