import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осыпать: PerfectVerb = {
  name: Word('осыпать', 4),
  singular1stPerson: Word('осыпаю', 4),
  singular2ndPerson: Word('осыпаешь', 4),
  singular3rdPerson: Word('осыпает', 4),
  plural1stPerson: Word('осыпаем', 4),
  plural2ndPerson: Word('осыпаете', 4),
  plural3rdPerson: Word('осыпают', 4),
  masculinePast: Word('осыпал', 4),
  femininePast: Word('осыпала', 4),
  neuterPast: Word('осыпало', 4),
  pluralPast: Word('осыпали', 4),
  imperativeInformal: Word('осыпай', 4),
  imperativeFormal: Word('осыпайте', 4),
  imperfect: [],
};

perfectVerbs.set(осыпать.name.text, осыпать);

export { осыпать };