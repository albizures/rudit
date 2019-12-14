import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повидать: PerfectVerb = {
  name: Word('повидать', 5),
  singular1stPerson: Word('повидаю', 5),
  singular2ndPerson: Word('повидаешь', 5),
  singular3rdPerson: Word('повидает', 5),
  plural1stPerson: Word('повидаем', 5),
  plural2ndPerson: Word('повидаете', 5),
  plural3rdPerson: Word('повидают', 5),
  masculinePast: Word('повидал', 5),
  femininePast: Word('повидала', 5),
  neuterPast: Word('повидало', 5),
  pluralPast: Word('повидали', 5),
  imperativeInformal: Word('повидай', 5),
  imperativeFormal: Word('повидайте', 5),
  imperfect: [],
};

perfectVerbs.set(повидать.name.text, повидать);

export { повидать };