import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удовлетворять: PerfectVerb = {
  name: Word('удовлетворять', 10),
  singular1stPerson: Word('удовлетворяю', 10),
  singular2ndPerson: Word('удовлетворяешь', 10),
  singular3rdPerson: Word('удовлетворяет', 10),
  plural1stPerson: Word('удовлетворяем', 10),
  plural2ndPerson: Word('удовлетворяете', 10),
  plural3rdPerson: Word('удовлетворяют', 10),
  masculinePast: Word('удовлетворял', 10),
  femininePast: Word('удовлетворяла', 10),
  neuterPast: Word('удовлетворяло', 10),
  pluralPast: Word('удовлетворяли', 10),
  imperativeInformal: Word('удовлетворяй', 10),
  imperativeFormal: Word('удовлетворяйте', 10),
  imperfect: ['удовлетворить'],
};

perfectVerbs.set(удовлетворять.name.text, удовлетворять);

export { удовлетворять };