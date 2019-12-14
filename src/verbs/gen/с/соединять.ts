import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соединять: PerfectVerb = {
  name: Word('соединять', 6),
  singular1stPerson: Word('соединяю', 6),
  singular2ndPerson: Word('соединяешь', 6),
  singular3rdPerson: Word('соединяет', 6),
  plural1stPerson: Word('соединяем', 6),
  plural2ndPerson: Word('соединяете', 6),
  plural3rdPerson: Word('соединяют', 6),
  masculinePast: Word('соединял', 6),
  femininePast: Word('соединяла', 6),
  neuterPast: Word('соединяло', 6),
  pluralPast: Word('соединяли', 6),
  imperativeInformal: Word('соединяй', 6),
  imperativeFormal: Word('соединяйте', 6),
  imperfect: ['соединить'],
};

perfectVerbs.set(соединять.name.text, соединять);

export { соединять };