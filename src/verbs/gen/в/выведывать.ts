import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выведывать: PerfectVerb = {
  name: Word('выведывать', 3),
  singular1stPerson: Word('выведываю', 3),
  singular2ndPerson: Word('выведываешь', 3),
  singular3rdPerson: Word('выведывает', 3),
  plural1stPerson: Word('выведываем', 3),
  plural2ndPerson: Word('выведываете', 3),
  plural3rdPerson: Word('выведывают', 3),
  masculinePast: Word('выведывал', 3),
  femininePast: Word('выведывала', 3),
  neuterPast: Word('выведывало', 3),
  pluralPast: Word('выведывали', 3),
  imperativeInformal: Word('выведывай', 3),
  imperativeFormal: Word('выведывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выведывать.name.text, выведывать);

export { выведывать };