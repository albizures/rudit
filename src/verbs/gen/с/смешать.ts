import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смешать: PerfectVerb = {
  name: Word('смешать', 4),
  singular1stPerson: Word('смешаю', 4),
  singular2ndPerson: Word('смешаешь', 4),
  singular3rdPerson: Word('смешает', 4),
  plural1stPerson: Word('смешаем', 4),
  plural2ndPerson: Word('смешаете', 4),
  plural3rdPerson: Word('смешают', 4),
  masculinePast: Word('смешал', 4),
  femininePast: Word('смешала', 4),
  neuterPast: Word('смешало', 4),
  pluralPast: Word('смешали', 4),
  imperativeInformal: Word('смешай', 4),
  imperativeFormal: Word('смешайте', 4),
  imperfect: [],
};

perfectVerbs.set(смешать.name.text, смешать);

export { смешать };