import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выжидать: PerfectVerb = {
  name: Word('выжидать', 5),
  singular1stPerson: Word('выжидаю', 5),
  singular2ndPerson: Word('выжидаешь', 5),
  singular3rdPerson: Word('выжидает', 5),
  plural1stPerson: Word('выжидаем', 5),
  plural2ndPerson: Word('выжидаете', 5),
  plural3rdPerson: Word('выжидают', 5),
  masculinePast: Word('выжидал', 5),
  femininePast: Word('выжидала', 5),
  neuterPast: Word('выжидало', 5),
  pluralPast: Word('выжидали', 5),
  imperativeInformal: Word('выжидай', 5),
  imperativeFormal: Word('выжидайте', 5),
  imperfect: [],
};

perfectVerbs.set(выжидать.name.text, выжидать);

export { выжидать };