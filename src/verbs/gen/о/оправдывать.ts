import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оправдывать: PerfectVerb = {
  name: Word('оправдывать', 3),
  singular1stPerson: Word('оправдываю', 3),
  singular2ndPerson: Word('оправдываешь', 3),
  singular3rdPerson: Word('оправдывает', 3),
  plural1stPerson: Word('оправдываем', 3),
  plural2ndPerson: Word('оправдываете', 3),
  plural3rdPerson: Word('оправдывают', 3),
  masculinePast: Word('оправдывал', 3),
  femininePast: Word('оправдывала', 3),
  neuterPast: Word('оправдывало', 3),
  pluralPast: Word('оправдывали', 3),
  imperativeInformal: Word('оправдывай', 3),
  imperativeFormal: Word('оправдывайте', 3),
  imperfect: ['оправдать'],
};

perfectVerbs.set(оправдывать.name.text, оправдывать);

export { оправдывать };