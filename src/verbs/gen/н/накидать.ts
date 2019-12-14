import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накидать: PerfectVerb = {
  name: Word('накидать', 5),
  singular1stPerson: Word('накидаю', 5),
  singular2ndPerson: Word('накидаешь', 5),
  singular3rdPerson: Word('накидает', 5),
  plural1stPerson: Word('накидаем', 5),
  plural2ndPerson: Word('накидаете', 5),
  plural3rdPerson: Word('накидают', 5),
  masculinePast: Word('накидал', 5),
  femininePast: Word('накидала', 5),
  neuterPast: Word('накидало', 5),
  pluralPast: Word('накидали', 5),
  imperativeInformal: Word('накидай', 5),
  imperativeFormal: Word('накидайте', 5),
  imperfect: [],
};

perfectVerbs.set(накидать.name.text, накидать);

export { накидать };