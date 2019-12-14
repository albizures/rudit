import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбалтывать: PerfectVerb = {
  name: Word('взбалтывать', 3),
  singular1stPerson: Word('взбалтываю', 3),
  singular2ndPerson: Word('взбалтываешь', 3),
  singular3rdPerson: Word('взбалтывает', 3),
  plural1stPerson: Word('взбалтываем', 3),
  plural2ndPerson: Word('взбалтываете', 3),
  plural3rdPerson: Word('взбалтывают', 3),
  masculinePast: Word('взбалтывал', 3),
  femininePast: Word('взбалтывала', 3),
  neuterPast: Word('взбалтывало', 3),
  pluralPast: Word('взбалтывали', 3),
  imperativeInformal: Word('взбалтывай', 3),
  imperativeFormal: Word('взбалтывайте', 3),
  imperfect: [],
};

perfectVerbs.set(взбалтывать.name.text, взбалтывать);

export { взбалтывать };