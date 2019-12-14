import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дожёвывать: PerfectVerb = {
  name: Word('дожёвывать', 7),
  singular1stPerson: Word('дожёвываю', 7),
  singular2ndPerson: Word('дожёвываешь', 7),
  singular3rdPerson: Word('дожёвывает', 7),
  plural1stPerson: Word('дожёвываем', 7),
  plural2ndPerson: Word('дожёвываете', 7),
  plural3rdPerson: Word('дожёвывают', 7),
  masculinePast: Word('дожёвывал', 7),
  femininePast: Word('дожёвывала', 7),
  neuterPast: Word('дожёвывало', 7),
  pluralPast: Word('дожёвывали', 7),
  imperativeInformal: Word('дожёвывай', 7),
  imperativeFormal: Word('дожёвывайте', 7),
  imperfect: [],
};

perfectVerbs.set(дожёвывать.name.text, дожёвывать);

export { дожёвывать };