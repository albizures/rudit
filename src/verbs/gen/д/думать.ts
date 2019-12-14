import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const думать: PerfectVerb = {
  name: Word('думать', 1),
  singular1stPerson: Word('думаю', 1),
  singular2ndPerson: Word('думаешь', 1),
  singular3rdPerson: Word('думает', 1),
  plural1stPerson: Word('думаем', 1),
  plural2ndPerson: Word('думаете', 1),
  plural3rdPerson: Word('думают', 1),
  masculinePast: Word('думал', 1),
  femininePast: Word('думала', 1),
  neuterPast: Word('думало', 1),
  pluralPast: Word('думали', 1),
  imperativeInformal: Word('думай', 1),
  imperativeFormal: Word('думайте', 1),
  imperfect: [],
};

perfectVerbs.set(думать.name.text, думать);

export { думать };