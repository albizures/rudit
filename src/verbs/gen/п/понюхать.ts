import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понюхать: PerfectVerb = {
  name: Word('понюхать', 3),
  singular1stPerson: Word('понюхаю', 3),
  singular2ndPerson: Word('понюхаешь', 3),
  singular3rdPerson: Word('понюхает', 3),
  plural1stPerson: Word('понюхаем', 3),
  plural2ndPerson: Word('понюхаете', 3),
  plural3rdPerson: Word('понюхают', 3),
  masculinePast: Word('понюхал', 3),
  femininePast: Word('понюхала', 3),
  neuterPast: Word('понюхало', 3),
  pluralPast: Word('понюхали', 3),
  imperativeInformal: Word('понюхай', 3),
  imperativeFormal: Word('понюхайте', 3),
  imperfect: [],
};

perfectVerbs.set(понюхать.name.text, понюхать);

export { понюхать };