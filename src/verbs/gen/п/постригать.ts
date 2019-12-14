import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постригать: PerfectVerb = {
  name: Word('постригать', 7),
  singular1stPerson: Word('постригаю', 7),
  singular2ndPerson: Word('постригаешь', 7),
  singular3rdPerson: Word('постригает', 7),
  plural1stPerson: Word('постригаем', 7),
  plural2ndPerson: Word('постригаете', 7),
  plural3rdPerson: Word('постригают', 7),
  masculinePast: Word('постригал', 7),
  femininePast: Word('постригала', 7),
  neuterPast: Word('постригало', 7),
  pluralPast: Word('постригали', 7),
  imperativeInformal: Word('постригай', 7),
  imperativeFormal: Word('постригайте', 7),
  imperfect: [],
};

perfectVerbs.set(постригать.name.text, постригать);

export { постригать };