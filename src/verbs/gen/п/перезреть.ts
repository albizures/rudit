import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перезреть: PerfectVerb = {
  name: Word('перезреть', 6),
  singular1stPerson: Word('перезрею', 6),
  singular2ndPerson: Word('перезреешь', 6),
  singular3rdPerson: Word('перезреет', 6),
  plural1stPerson: Word('перезреем', 6),
  plural2ndPerson: Word('перезреете', 6),
  plural3rdPerson: Word('перезреют', 6),
  masculinePast: Word('перезрел', 6),
  femininePast: Word('перезрела', 6),
  neuterPast: Word('перезрело', 6),
  pluralPast: Word('перезрели', 6),
  imperativeInformal: Word('перезрей', 6),
  imperativeFormal: Word('перезрейте', 6),
  imperfect: [],
};

perfectVerbs.set(перезреть.name.text, перезреть);

export { перезреть };