import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпалывать: PerfectVerb = {
  name: Word('выпалывать', 3),
  singular1stPerson: Word('выпалываю', 3),
  singular2ndPerson: Word('выпалываешь', 3),
  singular3rdPerson: Word('выпалывает', 3),
  plural1stPerson: Word('выпалываем', 3),
  plural2ndPerson: Word('выпалываете', 3),
  plural3rdPerson: Word('выпалывают', 3),
  masculinePast: Word('выпалывал', 3),
  femininePast: Word('выпалывала', 3),
  neuterPast: Word('выпалывало', 3),
  pluralPast: Word('выпалывали', 3),
  imperativeInformal: Word('выпалывай', 3),
  imperativeFormal: Word('выпалывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выпалывать.name.text, выпалывать);

export { выпалывать };