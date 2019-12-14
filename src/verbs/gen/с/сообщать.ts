import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сообщать: PerfectVerb = {
  name: Word('сообщать', 5),
  singular1stPerson: Word('сообщаю', 5),
  singular2ndPerson: Word('сообщаешь', 5),
  singular3rdPerson: Word('сообщает', 5),
  plural1stPerson: Word('сообщаем', 5),
  plural2ndPerson: Word('сообщаете', 5),
  plural3rdPerson: Word('сообщают', 5),
  masculinePast: Word('сообщал', 5),
  femininePast: Word('сообщала', 5),
  neuterPast: Word('сообщало', 5),
  pluralPast: Word('сообщали', 5),
  imperativeInformal: Word('сообщай', 5),
  imperativeFormal: Word('сообщайте', 5),
  imperfect: ['сообщить'],
};

perfectVerbs.set(сообщать.name.text, сообщать);

export { сообщать };