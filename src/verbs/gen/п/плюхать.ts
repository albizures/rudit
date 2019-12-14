import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плюхать: PerfectVerb = {
  name: Word('плюхать', 2),
  singular1stPerson: Word('плюхаю', 2),
  singular2ndPerson: Word('плюхаешь', 2),
  singular3rdPerson: Word('плюхает', 2),
  plural1stPerson: Word('плюхаем', 2),
  plural2ndPerson: Word('плюхаете', 2),
  plural3rdPerson: Word('плюхают', 2),
  masculinePast: Word('плюхал', 2),
  femininePast: Word('плюхала', 2),
  neuterPast: Word('плюхало', 2),
  pluralPast: Word('плюхали', 2),
  imperativeInformal: Word('плюхай', 2),
  imperativeFormal: Word('плюхайте', 2),
  imperfect: [],
};

perfectVerbs.set(плюхать.name.text, плюхать);

export { плюхать };