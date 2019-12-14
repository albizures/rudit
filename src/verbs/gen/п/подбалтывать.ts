import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбалтывать: PerfectVerb = {
  name: Word('подбалтывать', 4),
  singular1stPerson: Word('подбалтываю', 4),
  singular2ndPerson: Word('подбалтываешь', 4),
  singular3rdPerson: Word('подбалтывает', 4),
  plural1stPerson: Word('подбалтываем', 4),
  plural2ndPerson: Word('подбалтываете', 4),
  plural3rdPerson: Word('подбалтывают', 4),
  masculinePast: Word('подбалтывал', 4),
  femininePast: Word('подбалтывала', 4),
  neuterPast: Word('подбалтывало', 4),
  pluralPast: Word('подбалтывали', 4),
  imperativeInformal: Word('подбалтывай', 4),
  imperativeFormal: Word('подбалтывайте', 4),
  imperfect: [],
};

perfectVerbs.set(подбалтывать.name.text, подбалтывать);

export { подбалтывать };