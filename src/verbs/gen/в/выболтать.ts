import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выболтать: PerfectVerb = {
  name: Word('выболтать', 1),
  singular1stPerson: Word('выболтаю', 1),
  singular2ndPerson: Word('выболтаешь', 1),
  singular3rdPerson: Word('выболтает', 1),
  plural1stPerson: Word('выболтаем', 1),
  plural2ndPerson: Word('выболтаете', 1),
  plural3rdPerson: Word('выболтают', 1),
  masculinePast: Word('выболтал', 1),
  femininePast: Word('выболтала', 1),
  neuterPast: Word('выболтало', 1),
  pluralPast: Word('выболтали', 1),
  imperativeInformal: Word('выболтай', 1),
  imperativeFormal: Word('выболтайте', 1),
  imperfect: [],
};

perfectVerbs.set(выболтать.name.text, выболтать);

export { выболтать };