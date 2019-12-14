import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лишать: PerfectVerb = {
  name: Word('лишать', 3),
  singular1stPerson: Word('лишаю', 3),
  singular2ndPerson: Word('лишаешь', 3),
  singular3rdPerson: Word('лишает', 3),
  plural1stPerson: Word('лишаем', 3),
  plural2ndPerson: Word('лишаете', 3),
  plural3rdPerson: Word('лишают', 3),
  masculinePast: Word('лишал', 3),
  femininePast: Word('лишала', 3),
  neuterPast: Word('лишало', 3),
  pluralPast: Word('лишали', 3),
  imperativeInformal: Word('лишай', 3),
  imperativeFormal: Word('лишайте', 3),
  imperfect: ['лишить'],
};

perfectVerbs.set(лишать.name.text, лишать);

export { лишать };