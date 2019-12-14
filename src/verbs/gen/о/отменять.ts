import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отменять: PerfectVerb = {
  name: Word('отменять', 5),
  singular1stPerson: Word('отменяю', 5),
  singular2ndPerson: Word('отменяешь', 5),
  singular3rdPerson: Word('отменяет', 5),
  plural1stPerson: Word('отменяем', 5),
  plural2ndPerson: Word('отменяете', 5),
  plural3rdPerson: Word('отменяют', 5),
  masculinePast: Word('отменял', 5),
  femininePast: Word('отменяла', 5),
  neuterPast: Word('отменяло', 5),
  pluralPast: Word('отменяли', 5),
  imperativeInformal: Word('отменяй', 5),
  imperativeFormal: Word('отменяйте', 5),
  imperfect: ['отменить'],
};

perfectVerbs.set(отменять.name.text, отменять);

export { отменять };