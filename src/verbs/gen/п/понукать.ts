import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понукать: PerfectVerb = {
  name: Word('понукать', 5),
  singular1stPerson: Word('понукаю', 5),
  singular2ndPerson: Word('понукаешь', 5),
  singular3rdPerson: Word('понукает', 5),
  plural1stPerson: Word('понукаем', 5),
  plural2ndPerson: Word('понукаете', 5),
  plural3rdPerson: Word('понукают', 5),
  masculinePast: Word('понукал', 5),
  femininePast: Word('понукала', 5),
  neuterPast: Word('понукало', 5),
  pluralPast: Word('понукали', 5),
  imperativeInformal: Word('понукай', 5),
  imperativeFormal: Word('понукайте', 5),
  imperfect: [],
};

perfectVerbs.set(понукать.name.text, понукать);

export { понукать };