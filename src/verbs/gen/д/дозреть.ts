import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дозреть: PerfectVerb = {
  name: Word('дозреть', 4),
  singular1stPerson: Word('дозрею', 4),
  singular2ndPerson: Word('дозреешь', 4),
  singular3rdPerson: Word('дозреет', 4),
  plural1stPerson: Word('дозреем', 4),
  plural2ndPerson: Word('дозреете', 4),
  plural3rdPerson: Word('дозреют', 4),
  masculinePast: Word('дозрел', 4),
  femininePast: Word('дозрела', 4),
  neuterPast: Word('дозрело', 4),
  pluralPast: Word('дозрели', 4),
  imperativeInformal: Word('дозрей', 4),
  imperativeFormal: Word('дозрейте', 4),
  imperfect: [],
};

perfectVerbs.set(дозреть.name.text, дозреть);

export { дозреть };