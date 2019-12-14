import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const догружать: PerfectVerb = {
  name: Word('догружать', 6),
  singular1stPerson: Word('догружаю', 6),
  singular2ndPerson: Word('догружаешь', 6),
  singular3rdPerson: Word('догружает', 6),
  plural1stPerson: Word('догружаем', 6),
  plural2ndPerson: Word('догружаете', 6),
  plural3rdPerson: Word('догружают', 6),
  masculinePast: Word('догружал', 6),
  femininePast: Word('догружала', 6),
  neuterPast: Word('догружало', 6),
  pluralPast: Word('догружали', 6),
  imperativeInformal: Word('догружай', 6),
  imperativeFormal: Word('догружайте', 6),
  imperfect: [],
};

perfectVerbs.set(догружать.name.text, догружать);

export { догружать };