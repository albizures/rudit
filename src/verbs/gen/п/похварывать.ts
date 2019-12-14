import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похварывать: PerfectVerb = {
  name: Word('похварывать', 4),
  singular1stPerson: Word('похварываю', 4),
  singular2ndPerson: Word('похварываешь', 4),
  singular3rdPerson: Word('похварывает', 4),
  plural1stPerson: Word('похварываем', 4),
  plural2ndPerson: Word('похварываете', 4),
  plural3rdPerson: Word('похварывают', 4),
  masculinePast: Word('похварывал', 4),
  femininePast: Word('похварывала', 4),
  neuterPast: Word('похварывало', 4),
  pluralPast: Word('похварывали', 4),
  imperativeInformal: Word('похварывай', 4),
  imperativeFormal: Word('похварывайте', 4),
  imperfect: [],
};

perfectVerbs.set(похварывать.name.text, похварывать);

export { похварывать };