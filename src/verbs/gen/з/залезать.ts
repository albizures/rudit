import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залезать: PerfectVerb = {
  name: Word('залезать', 5),
  singular1stPerson: Word('залезаю', 5),
  singular2ndPerson: Word('залезаешь', 5),
  singular3rdPerson: Word('залезает', 5),
  plural1stPerson: Word('залезаем', 5),
  plural2ndPerson: Word('залезаете', 5),
  plural3rdPerson: Word('залезают', 5),
  masculinePast: Word('залезал', 5),
  femininePast: Word('залезала', 5),
  neuterPast: Word('залезало', 5),
  pluralPast: Word('залезали', 5),
  imperativeInformal: Word('залезай', 5),
  imperativeFormal: Word('залезайте', 5),
  imperfect: [],
};

perfectVerbs.set(залезать.name.text, залезать);

export { залезать };