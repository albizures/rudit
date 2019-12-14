import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const латать: PerfectVerb = {
  name: Word('латать', 3),
  singular1stPerson: Word('латаю', 3),
  singular2ndPerson: Word('латаешь', 3),
  singular3rdPerson: Word('латает', 3),
  plural1stPerson: Word('латаем', 3),
  plural2ndPerson: Word('латаете', 3),
  plural3rdPerson: Word('латают', 3),
  masculinePast: Word('латал', 3),
  femininePast: Word('латала', 3),
  neuterPast: Word('латало', 3),
  pluralPast: Word('латали', 3),
  imperativeInformal: Word('латай', 3),
  imperativeFormal: Word('латайте', 3),
  imperfect: ['залатать'],
};

perfectVerbs.set(латать.name.text, латать);

export { латать };