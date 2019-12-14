import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дожёвывать: PerfectVerb = {
  name: Word('дожёвывать', 3),
  singular1stPerson: Word('дожёвываю', 3),
  singular2ndPerson: Word('дожёвываешь', 3),
  singular3rdPerson: Word('дожёвывает', 3),
  plural1stPerson: Word('дожёвываем', 3),
  plural2ndPerson: Word('дожёвываете', 3),
  plural3rdPerson: Word('дожёвывают', 3),
  masculinePast: Word('дожёвывал', 3),
  femininePast: Word('дожёвывала', 3),
  neuterPast: Word('дожёвывало', 3),
  pluralPast: Word('дожёвывали', 3),
  imperativeInformal: Word('дожёвывай', 3),
  imperativeFormal: Word('дожёвывайте', 3),
  imperfect: [],
};

perfectVerbs.set(дожёвывать.name.text, дожёвывать);

export { дожёвывать };