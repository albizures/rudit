import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закидать: PerfectVerb = {
  name: Word('закидать', 5),
  singular1stPerson: Word('закидаю', 5),
  singular2ndPerson: Word('закидаешь', 5),
  singular3rdPerson: Word('закидает', 5),
  plural1stPerson: Word('закидаем', 5),
  plural2ndPerson: Word('закидаете', 5),
  plural3rdPerson: Word('закидают', 5),
  masculinePast: Word('закидал', 5),
  femininePast: Word('закидала', 5),
  neuterPast: Word('закидало', 5),
  pluralPast: Word('закидали', 5),
  imperativeInformal: Word('закидай', 5),
  imperativeFormal: Word('закидайте', 5),
  imperfect: [],
};

perfectVerbs.set(закидать.name.text, закидать);

export { закидать };