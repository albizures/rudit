import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начхать: PerfectVerb = {
  name: Word('начхать', 4),
  singular1stPerson: Word('начхаю', 4),
  singular2ndPerson: Word('начхаешь', 4),
  singular3rdPerson: Word('начхает', 4),
  plural1stPerson: Word('начхаем', 4),
  plural2ndPerson: Word('начхаете', 4),
  plural3rdPerson: Word('начхают', 4),
  masculinePast: Word('начхал', 4),
  femininePast: Word('начхала', 4),
  neuterPast: Word('начхало', 4),
  pluralPast: Word('начхали', 4),
  imperativeInformal: Word('начхай', 4),
  imperativeFormal: Word('начхайте', 4),
  imperfect: [],
};

perfectVerbs.set(начхать.name.text, начхать);

export { начхать };