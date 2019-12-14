import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бросать: PerfectVerb = {
  name: Word('бросать', 4),
  singular1stPerson: Word('бросаю', 4),
  singular2ndPerson: Word('бросаешь', 4),
  singular3rdPerson: Word('бросает', 4),
  plural1stPerson: Word('бросаем', 4),
  plural2ndPerson: Word('бросаете', 4),
  plural3rdPerson: Word('бросают', 4),
  masculinePast: Word('бросал', 4),
  femininePast: Word('бросала', 4),
  neuterPast: Word('бросало', 4),
  pluralPast: Word('бросали', 4),
  imperativeInformal: Word('бросай', 4),
  imperativeFormal: Word('бросайте', 4),
  imperfect: ['бросить'],
};

perfectVerbs.set(бросать.name.text, бросать);

export { бросать };