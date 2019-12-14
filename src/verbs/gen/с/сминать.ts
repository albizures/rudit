import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сминать: PerfectVerb = {
  name: Word('сминать', 4),
  singular1stPerson: Word('сминаю', 4),
  singular2ndPerson: Word('сминаешь', 4),
  singular3rdPerson: Word('сминает', 4),
  plural1stPerson: Word('сминаем', 4),
  plural2ndPerson: Word('сминаете', 4),
  plural3rdPerson: Word('сминают', 4),
  masculinePast: Word('сминал', 4),
  femininePast: Word('сминала', 4),
  neuterPast: Word('сминало', 4),
  pluralPast: Word('сминали', 4),
  imperativeInformal: Word('сминай', 4),
  imperativeFormal: Word('сминайте', 4),
  imperfect: [],
};

perfectVerbs.set(сминать.name.text, сминать);

export { сминать };