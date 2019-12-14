import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поджидать: PerfectVerb = {
  name: Word('поджидать', 6),
  singular1stPerson: Word('поджидаю', 6),
  singular2ndPerson: Word('поджидаешь', 6),
  singular3rdPerson: Word('поджидает', 6),
  plural1stPerson: Word('поджидаем', 6),
  plural2ndPerson: Word('поджидаете', 6),
  plural3rdPerson: Word('поджидают', 6),
  masculinePast: Word('поджидал', 6),
  femininePast: Word('поджидала', 6),
  neuterPast: Word('поджидало', 6),
  pluralPast: Word('поджидали', 6),
  imperativeInformal: Word('поджидай', 6),
  imperativeFormal: Word('поджидайте', 6),
  imperfect: [],
};

perfectVerbs.set(поджидать.name.text, поджидать);

export { поджидать };