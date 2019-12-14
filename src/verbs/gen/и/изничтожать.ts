import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изничтожать: PerfectVerb = {
  name: Word('изничтожать', 8),
  singular1stPerson: Word('изничтожаю', 8),
  singular2ndPerson: Word('изничтожаешь', 8),
  singular3rdPerson: Word('изничтожает', 8),
  plural1stPerson: Word('изничтожаем', 8),
  plural2ndPerson: Word('изничтожаете', 8),
  plural3rdPerson: Word('изничтожают', 8),
  masculinePast: Word('изничтожал', 8),
  femininePast: Word('изничтожала', 8),
  neuterPast: Word('изничтожало', 8),
  pluralPast: Word('изничтожали', 8),
  imperativeInformal: Word('изничтожай', 8),
  imperativeFormal: Word('изничтожайте', 8),
  imperfect: [],
};

perfectVerbs.set(изничтожать.name.text, изничтожать);

export { изничтожать };