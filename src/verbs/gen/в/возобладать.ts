import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возобладать: PerfectVerb = {
  name: Word('возобладать', 8),
  singular1stPerson: Word('возобладаю', 8),
  singular2ndPerson: Word('возобладаешь', 8),
  singular3rdPerson: Word('возобладает', 8),
  plural1stPerson: Word('возобладаем', 8),
  plural2ndPerson: Word('возобладаете', 8),
  plural3rdPerson: Word('возобладают', 8),
  masculinePast: Word('возобладал', 8),
  femininePast: Word('возобладала', 8),
  neuterPast: Word('возобладало', 8),
  pluralPast: Word('возобладали', 8),
  imperativeInformal: Word('возобладай', 8),
  imperativeFormal: Word('возобладайте', 8),
  imperfect: [],
};

perfectVerbs.set(возобладать.name.text, возобладать);

export { возобладать };