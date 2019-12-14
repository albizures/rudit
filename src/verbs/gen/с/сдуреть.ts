import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдуреть: PerfectVerb = {
  name: Word('сдуреть', 4),
  singular1stPerson: Word('сдурею', 4),
  singular2ndPerson: Word('сдуреешь', 4),
  singular3rdPerson: Word('сдуреет', 4),
  plural1stPerson: Word('сдуреем', 4),
  plural2ndPerson: Word('сдуреете', 4),
  plural3rdPerson: Word('сдуреют', 4),
  masculinePast: Word('сдурел', 4),
  femininePast: Word('сдурела', 4),
  neuterPast: Word('сдурело', 4),
  pluralPast: Word('сдурели', 4),
  imperativeInformal: Word('сдурей', 4),
  imperativeFormal: Word('сдурейте', 4),
  imperfect: [],
};

perfectVerbs.set(сдуреть.name.text, сдуреть);

export { сдуреть };