import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкалывать: PerfectVerb = {
  name: Word('обкалывать', 3),
  singular1stPerson: Word('обкалываю', 3),
  singular2ndPerson: Word('обкалываешь', 3),
  singular3rdPerson: Word('обкалывает', 3),
  plural1stPerson: Word('обкалываем', 3),
  plural2ndPerson: Word('обкалываете', 3),
  plural3rdPerson: Word('обкалывают', 3),
  masculinePast: Word('обкалывал', 3),
  femininePast: Word('обкалывала', 3),
  neuterPast: Word('обкалывало', 3),
  pluralPast: Word('обкалывали', 3),
  imperativeInformal: Word('обкалывай', 3),
  imperativeFormal: Word('обкалывайте', 3),
  imperfect: [],
};

perfectVerbs.set(обкалывать.name.text, обкалывать);

export { обкалывать };