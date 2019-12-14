import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дочитывать: PerfectVerb = {
  name: Word('дочитывать', 3),
  singular1stPerson: Word('дочитываю', 3),
  singular2ndPerson: Word('дочитываешь', 3),
  singular3rdPerson: Word('дочитывает', 3),
  plural1stPerson: Word('дочитываем', 3),
  plural2ndPerson: Word('дочитываете', 3),
  plural3rdPerson: Word('дочитывают', 3),
  masculinePast: Word('дочитывал', 3),
  femininePast: Word('дочитывала', 3),
  neuterPast: Word('дочитывало', 3),
  pluralPast: Word('дочитывали', 3),
  imperativeInformal: Word('дочитывай', 3),
  imperativeFormal: Word('дочитывайте', 3),
  imperfect: [],
};

perfectVerbs.set(дочитывать.name.text, дочитывать);

export { дочитывать };