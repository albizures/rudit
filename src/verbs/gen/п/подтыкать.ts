import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтыкать: PerfectVerb = {
  name: Word('подтыкать', 6),
  singular1stPerson: Word('подтыкаю', 6),
  singular2ndPerson: Word('подтыкаешь', 6),
  singular3rdPerson: Word('подтыкает', 6),
  plural1stPerson: Word('подтыкаем', 6),
  plural2ndPerson: Word('подтыкаете', 6),
  plural3rdPerson: Word('подтыкают', 6),
  masculinePast: Word('подтыкал', 6),
  femininePast: Word('подтыкала', 6),
  neuterPast: Word('подтыкало', 6),
  pluralPast: Word('подтыкали', 6),
  imperativeInformal: Word('подтыкай', 6),
  imperativeFormal: Word('подтыкайте', 6),
  imperfect: [],
};

perfectVerbs.set(подтыкать.name.text, подтыкать);

export { подтыкать };