import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const получать: PerfectVerb = {
  name: Word('получать', 5),
  singular1stPerson: Word('получаю', 5),
  singular2ndPerson: Word('получаешь', 5),
  singular3rdPerson: Word('получает', 5),
  plural1stPerson: Word('получаем', 5),
  plural2ndPerson: Word('получаете', 5),
  plural3rdPerson: Word('получают', 5),
  masculinePast: Word('получал', 5),
  femininePast: Word('получала', 5),
  neuterPast: Word('получало', 5),
  pluralPast: Word('получали', 5),
  imperativeInformal: Word('получай', 5),
  imperativeFormal: Word('получайте', 5),
  imperfect: ['получить'],
};

perfectVerbs.set(получать.name.text, получать);

export { получать };