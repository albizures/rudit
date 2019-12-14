import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промалывать: PerfectVerb = {
  name: Word('промалывать', 4),
  singular1stPerson: Word('промалываю', 4),
  singular2ndPerson: Word('промалываешь', 4),
  singular3rdPerson: Word('промалывает', 4),
  plural1stPerson: Word('промалываем', 4),
  plural2ndPerson: Word('промалываете', 4),
  plural3rdPerson: Word('промалывают', 4),
  masculinePast: Word('промалывал', 4),
  femininePast: Word('промалывала', 4),
  neuterPast: Word('промалывало', 4),
  pluralPast: Word('промалывали', 4),
  imperativeInformal: Word('промалывай', 4),
  imperativeFormal: Word('промалывайте', 4),
  imperfect: [],
};

perfectVerbs.set(промалывать.name.text, промалывать);

export { промалывать };