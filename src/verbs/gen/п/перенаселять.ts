import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перенаселять: PerfectVerb = {
  name: Word('перенаселять', 9),
  singular1stPerson: Word('перенаселяю', 9),
  singular2ndPerson: Word('перенаселяешь', 9),
  singular3rdPerson: Word('перенаселяет', 9),
  plural1stPerson: Word('перенаселяем', 9),
  plural2ndPerson: Word('перенаселяете', 9),
  plural3rdPerson: Word('перенаселяют', 9),
  masculinePast: Word('перенаселял', 9),
  femininePast: Word('перенаселяла', 9),
  neuterPast: Word('перенаселяло', 9),
  pluralPast: Word('перенаселяли', 9),
  imperativeInformal: Word('перенаселяй', 9),
  imperativeFormal: Word('перенаселяйте', 9),
  imperfect: [],
};

perfectVerbs.set(перенаселять.name.text, перенаселять);

export { перенаселять };