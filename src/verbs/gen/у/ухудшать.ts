import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухудшать: PerfectVerb = {
  name: Word('ухудшать', 5),
  singular1stPerson: Word('ухудшаю', 5),
  singular2ndPerson: Word('ухудшаешь', 5),
  singular3rdPerson: Word('ухудшает', 5),
  plural1stPerson: Word('ухудшаем', 5),
  plural2ndPerson: Word('ухудшаете', 5),
  plural3rdPerson: Word('ухудшают', 5),
  masculinePast: Word('ухудшал', 5),
  femininePast: Word('ухудшала', 5),
  neuterPast: Word('ухудшало', 5),
  pluralPast: Word('ухудшали', 5),
  imperativeInformal: Word('ухудшай', 5),
  imperativeFormal: Word('ухудшайте', 5),
  imperfect: [],
};

perfectVerbs.set(ухудшать.name.text, ухудшать);

export { ухудшать };