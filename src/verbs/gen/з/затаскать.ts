import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затаскать: PerfectVerb = {
  name: Word('затаскать', 6),
  singular1stPerson: Word('затаскаю', 6),
  singular2ndPerson: Word('затаскаешь', 6),
  singular3rdPerson: Word('затаскает', 6),
  plural1stPerson: Word('затаскаем', 6),
  plural2ndPerson: Word('затаскаете', 6),
  plural3rdPerson: Word('затаскают', 6),
  masculinePast: Word('затаскал', 6),
  femininePast: Word('затаскала', 6),
  neuterPast: Word('затаскало', 6),
  pluralPast: Word('затаскали', 6),
  imperativeInformal: Word('затаскай', 6),
  imperativeFormal: Word('затаскайте', 6),
  imperfect: [],
};

perfectVerbs.set(затаскать.name.text, затаскать);

export { затаскать };