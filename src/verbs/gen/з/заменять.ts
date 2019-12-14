import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заменять: PerfectVerb = {
  name: Word('заменять', 5),
  singular1stPerson: Word('заменяю', 5),
  singular2ndPerson: Word('заменяешь', 5),
  singular3rdPerson: Word('заменяет', 5),
  plural1stPerson: Word('заменяем', 5),
  plural2ndPerson: Word('заменяете', 5),
  plural3rdPerson: Word('заменяют', 5),
  masculinePast: Word('заменял', 5),
  femininePast: Word('заменяла', 5),
  neuterPast: Word('заменяло', 5),
  pluralPast: Word('заменяли', 5),
  imperativeInformal: Word('заменяй', 5),
  imperativeFormal: Word('заменяйте', 5),
  imperfect: ['заменить'],
};

perfectVerbs.set(заменять.name.text, заменять);

export { заменять };