import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорывать: PerfectVerb = {
  name: Word('дорывать', 5),
  singular1stPerson: Word('дорываю', 5),
  singular2ndPerson: Word('дорываешь', 5),
  singular3rdPerson: Word('дорывает', 5),
  plural1stPerson: Word('дорываем', 5),
  plural2ndPerson: Word('дорываете', 5),
  plural3rdPerson: Word('дорывают', 5),
  masculinePast: Word('дорывал', 5),
  femininePast: Word('дорывала', 5),
  neuterPast: Word('дорывало', 5),
  pluralPast: Word('дорывали', 5),
  imperativeInformal: Word('дорывай', 5),
  imperativeFormal: Word('дорывайте', 5),
  imperfect: [],
};

perfectVerbs.set(дорывать.name.text, дорывать);

export { дорывать };