import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дуреть: PerfectVerb = {
  name: Word('дуреть', 3),
  singular1stPerson: Word('дурею', 3),
  singular2ndPerson: Word('дуреешь', 3),
  singular3rdPerson: Word('дуреет', 3),
  plural1stPerson: Word('дуреем', 3),
  plural2ndPerson: Word('дуреете', 3),
  plural3rdPerson: Word('дуреют', 3),
  masculinePast: Word('дурел', 3),
  femininePast: Word('дурела', 3),
  neuterPast: Word('дурело', 3),
  pluralPast: Word('дурели', 3),
  imperativeInformal: Word('дурей', 3),
  imperativeFormal: Word('дурейте', 3),
  imperfect: [],
};

perfectVerbs.set(дуреть.name.text, дуреть);

export { дуреть };