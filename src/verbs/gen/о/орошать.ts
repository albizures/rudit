import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const орошать: PerfectVerb = {
  name: Word('орошать', 4),
  singular1stPerson: Word('орошаю', 4),
  singular2ndPerson: Word('орошаешь', 4),
  singular3rdPerson: Word('орошает', 4),
  plural1stPerson: Word('орошаем', 4),
  plural2ndPerson: Word('орошаете', 4),
  plural3rdPerson: Word('орошают', 4),
  masculinePast: Word('орошал', 4),
  femininePast: Word('орошала', 4),
  neuterPast: Word('орошало', 4),
  pluralPast: Word('орошали', 4),
  imperativeInformal: Word('орошай', 4),
  imperativeFormal: Word('орошайте', 4),
  imperfect: ['оросить'],
};

perfectVerbs.set(орошать.name.text, орошать);

export { орошать };