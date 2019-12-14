import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кидать: PerfectVerb = {
  name: Word('кидать', 3),
  singular1stPerson: Word('кидаю', 3),
  singular2ndPerson: Word('кидаешь', 3),
  singular3rdPerson: Word('кидает', 3),
  plural1stPerson: Word('кидаем', 3),
  plural2ndPerson: Word('кидаете', 3),
  plural3rdPerson: Word('кидают', 3),
  masculinePast: Word('кидал', 3),
  femininePast: Word('кидала', 3),
  neuterPast: Word('кидало', 3),
  pluralPast: Word('кидали', 3),
  imperativeInformal: Word('кидай', 3),
  imperativeFormal: Word('кидайте', 3),
  imperfect: ['кинуть'],
};

perfectVerbs.set(кидать.name.text, кидать);

export { кидать };