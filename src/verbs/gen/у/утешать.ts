import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утешать: PerfectVerb = {
  name: Word('утешать', 4),
  singular1stPerson: Word('утешаю', 4),
  singular2ndPerson: Word('утешаешь', 4),
  singular3rdPerson: Word('утешает', 4),
  plural1stPerson: Word('утешаем', 4),
  plural2ndPerson: Word('утешаете', 4),
  plural3rdPerson: Word('утешают', 4),
  masculinePast: Word('утешал', 4),
  femininePast: Word('утешала', 4),
  neuterPast: Word('утешало', 4),
  pluralPast: Word('утешали', 4),
  imperativeInformal: Word('утешай', 4),
  imperativeFormal: Word('утешайте', 4),
  imperfect: ['утешить'],
};

perfectVerbs.set(утешать.name.text, утешать);

export { утешать };