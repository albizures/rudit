import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкидывать: PerfectVerb = {
  name: Word('подкидывать', 4),
  singular1stPerson: Word('подкидываю', 4),
  singular2ndPerson: Word('подкидываешь', 4),
  singular3rdPerson: Word('подкидывает', 4),
  plural1stPerson: Word('подкидываем', 4),
  plural2ndPerson: Word('подкидываете', 4),
  plural3rdPerson: Word('подкидывают', 4),
  masculinePast: Word('подкидывал', 4),
  femininePast: Word('подкидывала', 4),
  neuterPast: Word('подкидывало', 4),
  pluralPast: Word('подкидывали', 4),
  imperativeInformal: Word('подкидывай', 4),
  imperativeFormal: Word('подкидывайте', 4),
  imperfect: [],
};

perfectVerbs.set(подкидывать.name.text, подкидывать);

export { подкидывать };