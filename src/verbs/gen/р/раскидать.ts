import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскидать: PerfectVerb = {
  name: Word('раскидать', 6),
  singular1stPerson: Word('раскидаю', 6),
  singular2ndPerson: Word('раскидаешь', 6),
  singular3rdPerson: Word('раскидает', 6),
  plural1stPerson: Word('раскидаем', 6),
  plural2ndPerson: Word('раскидаете', 6),
  plural3rdPerson: Word('раскидают', 6),
  masculinePast: Word('раскидал', 6),
  femininePast: Word('раскидала', 6),
  neuterPast: Word('раскидало', 6),
  pluralPast: Word('раскидали', 6),
  imperativeInformal: Word('раскидай', 6),
  imperativeFormal: Word('раскидайте', 6),
  imperfect: [],
};

perfectVerbs.set(раскидать.name.text, раскидать);

export { раскидать };