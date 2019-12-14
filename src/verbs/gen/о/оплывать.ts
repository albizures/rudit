import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оплывать: PerfectVerb = {
  name: Word('оплывать', 5),
  singular1stPerson: Word('оплываю', 5),
  singular2ndPerson: Word('оплываешь', 5),
  singular3rdPerson: Word('оплывает', 5),
  plural1stPerson: Word('оплываем', 5),
  plural2ndPerson: Word('оплываете', 5),
  plural3rdPerson: Word('оплывают', 5),
  masculinePast: Word('оплывал', 5),
  femininePast: Word('оплывала', 5),
  neuterPast: Word('оплывало', 5),
  pluralPast: Word('оплывали', 5),
  imperativeInformal: Word('оплывай', 5),
  imperativeFormal: Word('оплывайте', 5),
  imperfect: [],
};

perfectVerbs.set(оплывать.name.text, оплывать);

export { оплывать };