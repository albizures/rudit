import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накалывать: PerfectVerb = {
  name: Word('накалывать', 3),
  singular1stPerson: Word('накалываю', 3),
  singular2ndPerson: Word('накалываешь', 3),
  singular3rdPerson: Word('накалывает', 3),
  plural1stPerson: Word('накалываем', 3),
  plural2ndPerson: Word('накалываете', 3),
  plural3rdPerson: Word('накалывают', 3),
  masculinePast: Word('накалывал', 3),
  femininePast: Word('накалывала', 3),
  neuterPast: Word('накалывало', 3),
  pluralPast: Word('накалывали', 3),
  imperativeInformal: Word('накалывай', 3),
  imperativeFormal: Word('накалывайте', 3),
  imperfect: [],
};

perfectVerbs.set(накалывать.name.text, накалывать);

export { накалывать };