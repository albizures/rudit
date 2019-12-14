import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заверять: PerfectVerb = {
  name: Word('заверять', 5),
  singular1stPerson: Word('заверяю', 5),
  singular2ndPerson: Word('заверяешь', 5),
  singular3rdPerson: Word('заверяет', 5),
  plural1stPerson: Word('заверяем', 5),
  plural2ndPerson: Word('заверяете', 5),
  plural3rdPerson: Word('заверяют', 5),
  masculinePast: Word('заверял', 5),
  femininePast: Word('заверяла', 5),
  neuterPast: Word('заверяло', 5),
  pluralPast: Word('заверяли', 5),
  imperativeInformal: Word('заверяй', 5),
  imperativeFormal: Word('заверяйте', 5),
  imperfect: ['заверить'],
};

perfectVerbs.set(заверять.name.text, заверять);

export { заверять };