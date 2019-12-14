import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ожидать: PerfectVerb = {
  name: Word('ожидать', 4),
  singular1stPerson: Word('ожидаю', 4),
  singular2ndPerson: Word('ожидаешь', 4),
  singular3rdPerson: Word('ожидает', 4),
  plural1stPerson: Word('ожидаем', 4),
  plural2ndPerson: Word('ожидаете', 4),
  plural3rdPerson: Word('ожидают', 4),
  masculinePast: Word('ожидал', 4),
  femininePast: Word('ожидала', 4),
  neuterPast: Word('ожидало', 4),
  pluralPast: Word('ожидали', 4),
  imperativeInformal: Word('ожидай', 4),
  imperativeFormal: Word('ожидайте', 4),
  imperfect: [],
};

perfectVerbs.set(ожидать.name.text, ожидать);

export { ожидать };