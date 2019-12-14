import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорасти: PerfectVerb = {
  name: Word('дорасти', 6),
  singular1stPerson: Word('дорасту', 6),
  singular2ndPerson: Word('дорастёшь', 3),
  singular3rdPerson: Word('дорастёт', 3),
  plural1stPerson: Word('дорастём', 3),
  plural2ndPerson: Word('дорастёте', 3),
  plural3rdPerson: Word('дорастут', 6),
  masculinePast: Word('дорос', 3),
  femininePast: Word('доросла', 6),
  neuterPast: Word('доросло', 6),
  pluralPast: Word('доросли', 6),
  imperativeInformal: Word('дорасти', 6),
  imperativeFormal: Word('дорастите', 6),
  imperfect: [],
};

perfectVerbs.set(дорасти.name.text, дорасти);

export { дорасти };