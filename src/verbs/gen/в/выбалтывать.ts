import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбалтывать: PerfectVerb = {
  name: Word('выбалтывать', 3),
  singular1stPerson: Word('выбалтываю', 3),
  singular2ndPerson: Word('выбалтываешь', 3),
  singular3rdPerson: Word('выбалтывает', 3),
  plural1stPerson: Word('выбалтываем', 3),
  plural2ndPerson: Word('выбалтываете', 3),
  plural3rdPerson: Word('выбалтывают', 3),
  masculinePast: Word('выбалтывал', 3),
  femininePast: Word('выбалтывала', 3),
  neuterPast: Word('выбалтывало', 3),
  pluralPast: Word('выбалтывали', 3),
  imperativeInformal: Word('выбалтывай', 3),
  imperativeFormal: Word('выбалтывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выбалтывать.name.text, выбалтывать);

export { выбалтывать };