import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расхлябать: PerfectVerb = {
  name: Word('расхлябать', 5),
  singular1stPerson: Word('расхлябаю', 5),
  singular2ndPerson: Word('расхлябаешь', 5),
  singular3rdPerson: Word('расхлябает', 5),
  plural1stPerson: Word('расхлябаем', 5),
  plural2ndPerson: Word('расхлябаете', 5),
  plural3rdPerson: Word('расхлябают', 5),
  masculinePast: Word('расхлябал', 5),
  femininePast: Word('расхлябала', 5),
  neuterPast: Word('расхлябало', 5),
  pluralPast: Word('расхлябали', 5),
  imperativeInformal: Word('расхлябай', 5),
  imperativeFormal: Word('расхлябайте', 5),
  imperfect: [],
};

perfectVerbs.set(расхлябать.name.text, расхлябать);

export { расхлябать };