import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбывать: PerfectVerb = {
  name: Word('сбывать', 4),
  singular1stPerson: Word('сбываю', 4),
  singular2ndPerson: Word('сбываешь', 4),
  singular3rdPerson: Word('сбывает', 4),
  plural1stPerson: Word('сбываем', 4),
  plural2ndPerson: Word('сбываете', 4),
  plural3rdPerson: Word('сбывают', 4),
  masculinePast: Word('сбывал', 4),
  femininePast: Word('сбывала', 4),
  neuterPast: Word('сбывало', 4),
  pluralPast: Word('сбывали', 4),
  imperativeInformal: Word('сбывай', 4),
  imperativeFormal: Word('сбывайте', 4),
  imperfect: [],
};

perfectVerbs.set(сбывать.name.text, сбывать);

export { сбывать };