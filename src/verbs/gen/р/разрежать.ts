import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрежать: PerfectVerb = {
  name: Word('разрежать', 6),
  singular1stPerson: Word('разрежаю', 6),
  singular2ndPerson: Word('разрежаешь', 6),
  singular3rdPerson: Word('разрежает', 6),
  plural1stPerson: Word('разрежаем', 6),
  plural2ndPerson: Word('разрежаете', 6),
  plural3rdPerson: Word('разрежают', 6),
  masculinePast: Word('разрежал', 6),
  femininePast: Word('разрежала', 6),
  neuterPast: Word('разрежало', 6),
  pluralPast: Word('разрежали', 6),
  imperativeInformal: Word('разрежай', 6),
  imperativeFormal: Word('разрежайте', 6),
  imperfect: [],
};

perfectVerbs.set(разрежать.name.text, разрежать);

export { разрежать };