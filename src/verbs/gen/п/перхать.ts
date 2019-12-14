import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перхать: PerfectVerb = {
  name: Word('перхать', 4),
  singular1stPerson: Word('перхаю', 4),
  singular2ndPerson: Word('перхаешь', 4),
  singular3rdPerson: Word('перхает', 4),
  plural1stPerson: Word('перхаем', 4),
  plural2ndPerson: Word('перхаете', 4),
  plural3rdPerson: Word('перхают', 4),
  masculinePast: Word('перхал', 4),
  femininePast: Word('перхала', 4),
  neuterPast: Word('перхало', 4),
  pluralPast: Word('перхали', 4),
  imperativeInformal: Word('перхай', 4),
  imperativeFormal: Word('перхайте', 4),
  imperfect: [],
};

perfectVerbs.set(перхать.name.text, перхать);

export { перхать };