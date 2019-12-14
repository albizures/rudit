import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбывать: PerfectVerb = {
  name: Word('выбывать', 5),
  singular1stPerson: Word('выбываю', 5),
  singular2ndPerson: Word('выбываешь', 5),
  singular3rdPerson: Word('выбывает', 5),
  plural1stPerson: Word('выбываем', 5),
  plural2ndPerson: Word('выбываете', 5),
  plural3rdPerson: Word('выбывают', 5),
  masculinePast: Word('выбывал', 5),
  femininePast: Word('выбывала', 5),
  neuterPast: Word('выбывало', 5),
  pluralPast: Word('выбывали', 5),
  imperativeInformal: Word('выбывай', 5),
  imperativeFormal: Word('выбывайте', 5),
  imperfect: [],
};

perfectVerbs.set(выбывать.name.text, выбывать);

export { выбывать };