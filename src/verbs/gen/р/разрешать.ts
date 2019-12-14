import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрешать: PerfectVerb = {
  name: Word('разрешать', 6),
  singular1stPerson: Word('разрешаю', 6),
  singular2ndPerson: Word('разрешаешь', 6),
  singular3rdPerson: Word('разрешает', 6),
  plural1stPerson: Word('разрешаем', 6),
  plural2ndPerson: Word('разрешаете', 6),
  plural3rdPerson: Word('разрешают', 6),
  masculinePast: Word('разрешал', 6),
  femininePast: Word('разрешала', 6),
  neuterPast: Word('разрешало', 6),
  pluralPast: Word('разрешали', 6),
  imperativeInformal: Word('разрешай', 6),
  imperativeFormal: Word('разрешайте', 6),
  imperfect: ['разрешить'],
};

perfectVerbs.set(разрешать.name.text, разрешать);

export { разрешать };