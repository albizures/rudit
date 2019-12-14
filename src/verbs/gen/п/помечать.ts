import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помечать: PerfectVerb = {
  name: Word('помечать', 5),
  singular1stPerson: Word('помечаю', 5),
  singular2ndPerson: Word('помечаешь', 5),
  singular3rdPerson: Word('помечает', 5),
  plural1stPerson: Word('помечаем', 5),
  plural2ndPerson: Word('помечаете', 5),
  plural3rdPerson: Word('помечают', 5),
  masculinePast: Word('помечал', 5),
  femininePast: Word('помечала', 5),
  neuterPast: Word('помечало', 5),
  pluralPast: Word('помечали', 5),
  imperativeInformal: Word('помечай', 5),
  imperativeFormal: Word('помечайте', 5),
  imperfect: ['пометить'],
};

perfectVerbs.set(помечать.name.text, помечать);

export { помечать };