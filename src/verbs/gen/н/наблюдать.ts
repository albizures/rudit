import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наблюдать: PerfectVerb = {
  name: Word('наблюдать', 6),
  singular1stPerson: Word('наблюдаю', 6),
  singular2ndPerson: Word('наблюдаешь', 6),
  singular3rdPerson: Word('наблюдает', 6),
  plural1stPerson: Word('наблюдаем', 6),
  plural2ndPerson: Word('наблюдаете', 6),
  plural3rdPerson: Word('наблюдают', 6),
  masculinePast: Word('наблюдал', 6),
  femininePast: Word('наблюдала', 6),
  neuterPast: Word('наблюдало', 6),
  pluralPast: Word('наблюдали', 6),
  imperativeInformal: Word('наблюдай', 6),
  imperativeFormal: Word('наблюдайте', 6),
  imperfect: ['понаблюдать'],
};

perfectVerbs.set(наблюдать.name.text, наблюдать);

export { наблюдать };