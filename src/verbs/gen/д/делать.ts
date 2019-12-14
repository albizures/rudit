import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const делать: PerfectVerb = {
  name: Word('делать', 1),
  singular1stPerson: Word('делаю', 1),
  singular2ndPerson: Word('делаешь', 1),
  singular3rdPerson: Word('делает', 1),
  plural1stPerson: Word('делаем', 1),
  plural2ndPerson: Word('делаете', 1),
  plural3rdPerson: Word('делают', 1),
  masculinePast: Word('делал', 1),
  femininePast: Word('делала', 1),
  neuterPast: Word('делало', 1),
  pluralPast: Word('делали', 1),
  imperativeInformal: Word('делай', 1),
  imperativeFormal: Word('делайте', 1),
  imperfect: ['сделать'],
};

perfectVerbs.set(делать.name.text, делать);

export { делать };