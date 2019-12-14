import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возражать: PerfectVerb = {
  name: Word('возражать', 6),
  singular1stPerson: Word('возражаю', 6),
  singular2ndPerson: Word('возражаешь', 6),
  singular3rdPerson: Word('возражает', 6),
  plural1stPerson: Word('возражаем', 6),
  plural2ndPerson: Word('возражаете', 6),
  plural3rdPerson: Word('возражают', 6),
  masculinePast: Word('возражал', 6),
  femininePast: Word('возражала', 6),
  neuterPast: Word('возражало', 6),
  pluralPast: Word('возражали', 6),
  imperativeInformal: Word('возражай', 6),
  imperativeFormal: Word('возражайте', 6),
  imperfect: ['возразить'],
};

perfectVerbs.set(возражать.name.text, возражать);

export { возражать };