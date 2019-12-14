import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отделять: PerfectVerb = {
  name: Word('отделять', 5),
  singular1stPerson: Word('отделяю', 5),
  singular2ndPerson: Word('отделяешь', 5),
  singular3rdPerson: Word('отделяет', 5),
  plural1stPerson: Word('отделяем', 5),
  plural2ndPerson: Word('отделяете', 5),
  plural3rdPerson: Word('отделяют', 5),
  masculinePast: Word('отделял', 5),
  femininePast: Word('отделяла', 5),
  neuterPast: Word('отделяло', 5),
  pluralPast: Word('отделяли', 5),
  imperativeInformal: Word('отделяй', 5),
  imperativeFormal: Word('отделяйте', 5),
  imperfect: ['отделить'],
};

perfectVerbs.set(отделять.name.text, отделять);

export { отделять };