import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помогать: PerfectVerb = {
  name: Word('помогать', 5),
  singular1stPerson: Word('помогаю', 5),
  singular2ndPerson: Word('помогаешь', 5),
  singular3rdPerson: Word('помогает', 5),
  plural1stPerson: Word('помогаем', 5),
  plural2ndPerson: Word('помогаете', 5),
  plural3rdPerson: Word('помогают', 5),
  masculinePast: Word('помогал', 5),
  femininePast: Word('помогала', 5),
  neuterPast: Word('помогало', 5),
  pluralPast: Word('помогали', 5),
  imperativeInformal: Word('помогай', 5),
  imperativeFormal: Word('помогайте', 5),
  imperfect: ['помочь'],
};

perfectVerbs.set(помогать.name.text, помогать);

export { помогать };