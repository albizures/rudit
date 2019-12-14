import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорисовывать: PerfectVerb = {
  name: Word('дорисовывать', 5),
  singular1stPerson: Word('дорисовываю', 5),
  singular2ndPerson: Word('дорисовываешь', 5),
  singular3rdPerson: Word('дорисовывает', 5),
  plural1stPerson: Word('дорисовываем', 5),
  plural2ndPerson: Word('дорисовываете', 5),
  plural3rdPerson: Word('дорисовывают', 5),
  masculinePast: Word('дорисовывал', 5),
  femininePast: Word('дорисовывала', 5),
  neuterPast: Word('дорисовывало', 5),
  pluralPast: Word('дорисовывали', 5),
  imperativeInformal: Word('дорисовывай', 5),
  imperativeFormal: Word('дорисовывайте', 5),
  imperfect: [],
};

perfectVerbs.set(дорисовывать.name.text, дорисовывать);

export { дорисовывать };