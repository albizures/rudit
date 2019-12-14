import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забавлять: PerfectVerb = {
  name: Word('забавлять', 6),
  singular1stPerson: Word('забавляю', 6),
  singular2ndPerson: Word('забавляешь', 6),
  singular3rdPerson: Word('забавляет', 6),
  plural1stPerson: Word('забавляем', 6),
  plural2ndPerson: Word('забавляете', 6),
  plural3rdPerson: Word('забавляют', 6),
  masculinePast: Word('забавлял', 6),
  femininePast: Word('забавляла', 6),
  neuterPast: Word('забавляло', 6),
  pluralPast: Word('забавляли', 6),
  imperativeInformal: Word('забавляй', 6),
  imperativeFormal: Word('забавляйте', 6),
  imperfect: ['позабавить'],
};

perfectVerbs.set(забавлять.name.text, забавлять);

export { забавлять };