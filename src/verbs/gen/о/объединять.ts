import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объединять: PerfectVerb = {
  name: Word('объединять', 7),
  singular1stPerson: Word('объединяю', 7),
  singular2ndPerson: Word('объединяешь', 7),
  singular3rdPerson: Word('объединяет', 7),
  plural1stPerson: Word('объединяем', 7),
  plural2ndPerson: Word('объединяете', 7),
  plural3rdPerson: Word('объединяют', 7),
  masculinePast: Word('объединял', 7),
  femininePast: Word('объединяла', 7),
  neuterPast: Word('объединяло', 7),
  pluralPast: Word('объединяли', 7),
  imperativeInformal: Word('объединяй', 7),
  imperativeFormal: Word('объединяйте', 7),
  imperfect: ['объединить'],
};

perfectVerbs.set(объединять.name.text, объединять);

export { объединять };