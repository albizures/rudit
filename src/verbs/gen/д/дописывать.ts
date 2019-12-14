import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дописывать: PerfectVerb = {
  name: Word('дописывать', 3),
  singular1stPerson: Word('дописываю', 3),
  singular2ndPerson: Word('дописываешь', 3),
  singular3rdPerson: Word('дописывает', 3),
  plural1stPerson: Word('дописываем', 3),
  plural2ndPerson: Word('дописываете', 3),
  plural3rdPerson: Word('дописывают', 3),
  masculinePast: Word('дописывал', 3),
  femininePast: Word('дописывала', 3),
  neuterPast: Word('дописывало', 3),
  pluralPast: Word('дописывали', 3),
  imperativeInformal: Word('дописывай', 3),
  imperativeFormal: Word('дописывайте', 3),
  imperfect: [],
};

perfectVerbs.set(дописывать.name.text, дописывать);

export { дописывать };