import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добреть: PerfectVerb = {
  name: Word('добреть', 4),
  singular1stPerson: Word('добрею', 4),
  singular2ndPerson: Word('добреешь', 4),
  singular3rdPerson: Word('добреет', 4),
  plural1stPerson: Word('добреем', 4),
  plural2ndPerson: Word('добреете', 4),
  plural3rdPerson: Word('добреют', 4),
  masculinePast: Word('добрел', 4),
  femininePast: Word('добрела', 4),
  neuterPast: Word('добрело', 4),
  pluralPast: Word('добрели', 4),
  imperativeInformal: Word('добрей', 4),
  imperativeFormal: Word('добрейте', 4),
  imperfect: [],
};

perfectVerbs.set(добреть.name.text, добреть);

export { добреть };