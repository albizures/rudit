import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задавать: PerfectVerb = {
  name: Word('задавать', 5),
  singular1stPerson: Word('задаю', 4),
  singular2ndPerson: Word('задаёшь', 4),
  singular3rdPerson: Word('задаёт', 4),
  plural1stPerson: Word('задаём', 4),
  plural2ndPerson: Word('задаёте', 4),
  plural3rdPerson: Word('задают', 4),
  masculinePast: Word('задавал', 5),
  femininePast: Word('задавала', 5),
  neuterPast: Word('задавало', 5),
  pluralPast: Word('задавали', 5),
  imperativeInformal: Word('задавай', 5),
  imperativeFormal: Word('задавайте', 5),
  imperfect: ['задать'],
};

perfectVerbs.set(задавать.name.text, задавать);

export { задавать };