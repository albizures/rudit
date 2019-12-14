import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распространять: PerfectVerb = {
  name: Word('распространять', 11),
  singular1stPerson: Word('распространяю', 11),
  singular2ndPerson: Word('распространяешь', 11),
  singular3rdPerson: Word('распространяет', 11),
  plural1stPerson: Word('распространяем', 11),
  plural2ndPerson: Word('распространяете', 11),
  plural3rdPerson: Word('распространяют', 11),
  masculinePast: Word('распространял', 11),
  femininePast: Word('распространяла', 11),
  neuterPast: Word('распространяло', 11),
  pluralPast: Word('распространяли', 11),
  imperativeInformal: Word('распространяй', 11),
  imperativeFormal: Word('распространяйте', 11),
  imperfect: ['распространить'],
};

perfectVerbs.set(распространять.name.text, распространять);

export { распространять };