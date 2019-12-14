import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откалывать: PerfectVerb = {
  name: Word('откалывать', 3),
  singular1stPerson: Word('откалываю', 3),
  singular2ndPerson: Word('откалываешь', 3),
  singular3rdPerson: Word('откалывает', 3),
  plural1stPerson: Word('откалываем', 3),
  plural2ndPerson: Word('откалываете', 3),
  plural3rdPerson: Word('откалывают', 3),
  masculinePast: Word('откалывал', 3),
  femininePast: Word('откалывала', 3),
  neuterPast: Word('откалывало', 3),
  pluralPast: Word('откалывали', 3),
  imperativeInformal: Word('откалывай', 3),
  imperativeFormal: Word('откалывайте', 3),
  imperfect: [],
};

perfectVerbs.set(откалывать.name.text, откалывать);

export { откалывать };