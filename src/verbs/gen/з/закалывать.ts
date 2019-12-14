import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закалывать: PerfectVerb = {
  name: Word('закалывать', 3),
  singular1stPerson: Word('закалываю', 3),
  singular2ndPerson: Word('закалываешь', 3),
  singular3rdPerson: Word('закалывает', 3),
  plural1stPerson: Word('закалываем', 3),
  plural2ndPerson: Word('закалываете', 3),
  plural3rdPerson: Word('закалывают', 3),
  masculinePast: Word('закалывал', 3),
  femininePast: Word('закалывала', 3),
  neuterPast: Word('закалывало', 3),
  pluralPast: Word('закалывали', 3),
  imperativeInformal: Word('закалывай', 3),
  imperativeFormal: Word('закалывайте', 3),
  imperfect: [],
};

perfectVerbs.set(закалывать.name.text, закалывать);

export { закалывать };