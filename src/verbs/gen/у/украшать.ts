import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const украшать: PerfectVerb = {
  name: Word('украшать', 5),
  singular1stPerson: Word('украшаю', 5),
  singular2ndPerson: Word('украшаешь', 5),
  singular3rdPerson: Word('украшает', 5),
  plural1stPerson: Word('украшаем', 5),
  plural2ndPerson: Word('украшаете', 5),
  plural3rdPerson: Word('украшают', 5),
  masculinePast: Word('украшал', 5),
  femininePast: Word('украшала', 5),
  neuterPast: Word('украшало', 5),
  pluralPast: Word('украшали', 5),
  imperativeInformal: Word('украшай', 5),
  imperativeFormal: Word('украшайте', 5),
  imperfect: ['украсить'],
};

perfectVerbs.set(украшать.name.text, украшать);

export { украшать };