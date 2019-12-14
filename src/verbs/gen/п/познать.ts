import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const познать: PerfectVerb = {
  name: Word('познать', 4),
  singular1stPerson: Word('познаю', 4),
  singular2ndPerson: Word('познаешь', 4),
  singular3rdPerson: Word('познает', 4),
  plural1stPerson: Word('познаем', 4),
  plural2ndPerson: Word('познаете', 4),
  plural3rdPerson: Word('познают', 4),
  masculinePast: Word('познал', 4),
  femininePast: Word('познала', 4),
  neuterPast: Word('познало', 4),
  pluralPast: Word('познали', 4),
  imperativeInformal: Word('познай', 4),
  imperativeFormal: Word('познайте', 4),
  imperfect: [],
};

perfectVerbs.set(познать.name.text, познать);

export { познать };