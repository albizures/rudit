import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вмещать: PerfectVerb = {
  name: Word('вмещать', 4),
  singular1stPerson: Word('вмещаю', 4),
  singular2ndPerson: Word('вмещаешь', 4),
  singular3rdPerson: Word('вмещает', 4),
  plural1stPerson: Word('вмещаем', 4),
  plural2ndPerson: Word('вмещаете', 4),
  plural3rdPerson: Word('вмещают', 4),
  masculinePast: Word('вмещал', 4),
  femininePast: Word('вмещала', 4),
  neuterPast: Word('вмещало', 4),
  pluralPast: Word('вмещали', 4),
  imperativeInformal: Word('вмещай', 4),
  imperativeFormal: Word('вмещайте', 4),
  imperfect: [],
};

perfectVerbs.set(вмещать.name.text, вмещать);

export { вмещать };