import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стукать: PerfectVerb = {
  name: Word('стукать', 2),
  singular1stPerson: Word('стукаю', 2),
  singular2ndPerson: Word('стукаешь', 2),
  singular3rdPerson: Word('стукает', 2),
  plural1stPerson: Word('стукаем', 2),
  plural2ndPerson: Word('стукаете', 2),
  plural3rdPerson: Word('стукают', 2),
  masculinePast: Word('стукал', 2),
  femininePast: Word('стукала', 2),
  neuterPast: Word('стукало', 2),
  pluralPast: Word('стукали', 2),
  imperativeInformal: Word('стукай', 2),
  imperativeFormal: Word('стукайте', 2),
  imperfect: [],
};

perfectVerbs.set(стукать.name.text, стукать);

export { стукать };