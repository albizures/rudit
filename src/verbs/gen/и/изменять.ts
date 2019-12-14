import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изменять: PerfectVerb = {
  name: Word('изменять', 5),
  singular1stPerson: Word('изменяю', 5),
  singular2ndPerson: Word('изменяешь', 5),
  singular3rdPerson: Word('изменяет', 5),
  plural1stPerson: Word('изменяем', 5),
  plural2ndPerson: Word('изменяете', 5),
  plural3rdPerson: Word('изменяют', 5),
  masculinePast: Word('изменял', 5),
  femininePast: Word('изменяла', 5),
  neuterPast: Word('изменяло', 5),
  pluralPast: Word('изменяли', 5),
  imperativeInformal: Word('изменяй', 5),
  imperativeFormal: Word('изменяйте', 5),
  imperfect: ['изменить'],
};

perfectVerbs.set(изменять.name.text, изменять);

export { изменять };