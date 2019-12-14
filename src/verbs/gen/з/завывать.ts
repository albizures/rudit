import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завывать: PerfectVerb = {
  name: Word('завывать', 5),
  singular1stPerson: Word('завываю', 5),
  singular2ndPerson: Word('завываешь', 5),
  singular3rdPerson: Word('завывает', 5),
  plural1stPerson: Word('завываем', 5),
  plural2ndPerson: Word('завываете', 5),
  plural3rdPerson: Word('завывают', 5),
  masculinePast: Word('завывал', 5),
  femininePast: Word('завывала', 5),
  neuterPast: Word('завывало', 5),
  pluralPast: Word('завывали', 5),
  imperativeInformal: Word('завывай', 5),
  imperativeFormal: Word('завывайте', 5),
  imperfect: [],
};

perfectVerbs.set(завывать.name.text, завывать);

export { завывать };