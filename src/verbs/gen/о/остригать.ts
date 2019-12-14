import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остригать: PerfectVerb = {
  name: Word('остригать', 6),
  singular1stPerson: Word('остригаю', 6),
  singular2ndPerson: Word('остригаешь', 6),
  singular3rdPerson: Word('остригает', 6),
  plural1stPerson: Word('остригаем', 6),
  plural2ndPerson: Word('остригаете', 6),
  plural3rdPerson: Word('остригают', 6),
  masculinePast: Word('остригал', 6),
  femininePast: Word('остригала', 6),
  neuterPast: Word('остригало', 6),
  pluralPast: Word('остригали', 6),
  imperativeInformal: Word('остригай', 6),
  imperativeFormal: Word('остригайте', 6),
  imperfect: [],
};

perfectVerbs.set(остригать.name.text, остригать);

export { остригать };