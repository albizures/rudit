import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улещать: PerfectVerb = {
  name: Word('улещать', 4),
  singular1stPerson: Word('улещаю', 4),
  singular2ndPerson: Word('улещаешь', 4),
  singular3rdPerson: Word('улещает', 4),
  plural1stPerson: Word('улещаем', 4),
  plural2ndPerson: Word('улещаете', 4),
  plural3rdPerson: Word('улещают', 4),
  masculinePast: Word('улещал', 4),
  femininePast: Word('улещала', 4),
  neuterPast: Word('улещало', 4),
  pluralPast: Word('улещали', 4),
  imperativeInformal: Word('улещай', 4),
  imperativeFormal: Word('улещайте', 4),
  imperfect: [],
};

perfectVerbs.set(улещать.name.text, улещать);

export { улещать };