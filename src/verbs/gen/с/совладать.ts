import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совладать: PerfectVerb = {
  name: Word('совладать', 6),
  singular1stPerson: Word('совладаю', 6),
  singular2ndPerson: Word('совладаешь', 6),
  singular3rdPerson: Word('совладает', 6),
  plural1stPerson: Word('совладаем', 6),
  plural2ndPerson: Word('совладаете', 6),
  plural3rdPerson: Word('совладают', 6),
  masculinePast: Word('совладал', 6),
  femininePast: Word('совладала', 6),
  neuterPast: Word('совладало', 6),
  pluralPast: Word('совладали', 6),
  imperativeInformal: Word('совладай', 6),
  imperativeFormal: Word('совладайте', 6),
  imperfect: [],
};

perfectVerbs.set(совладать.name.text, совладать);

export { совладать };