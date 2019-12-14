import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распределять: PerfectVerb = {
  name: Word('распределять', 9),
  singular1stPerson: Word('распределяю', 9),
  singular2ndPerson: Word('распределяешь', 9),
  singular3rdPerson: Word('распределяет', 9),
  plural1stPerson: Word('распределяем', 9),
  plural2ndPerson: Word('распределяете', 9),
  plural3rdPerson: Word('распределяют', 9),
  masculinePast: Word('распределял', 9),
  femininePast: Word('распределяла', 9),
  neuterPast: Word('распределяло', 9),
  pluralPast: Word('распределяли', 9),
  imperativeInformal: Word('распределяй', 9),
  imperativeFormal: Word('распределяйте', 9),
  imperfect: ['распределить'],
};

perfectVerbs.set(распределять.name.text, распределять);

export { распределять };