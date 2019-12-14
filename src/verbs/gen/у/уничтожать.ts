import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уничтожать: PerfectVerb = {
  name: Word('уничтожать', 7),
  singular1stPerson: Word('уничтожаю', 7),
  singular2ndPerson: Word('уничтожаешь', 7),
  singular3rdPerson: Word('уничтожает', 7),
  plural1stPerson: Word('уничтожаем', 7),
  plural2ndPerson: Word('уничтожаете', 7),
  plural3rdPerson: Word('уничтожают', 7),
  masculinePast: Word('уничтожал', 7),
  femininePast: Word('уничтожала', 7),
  neuterPast: Word('уничтожало', 7),
  pluralPast: Word('уничтожали', 7),
  imperativeInformal: Word('уничтожай', 7),
  imperativeFormal: Word('уничтожайте', 7),
  imperfect: ['уничтожить'],
};

perfectVerbs.set(уничтожать.name.text, уничтожать);

export { уничтожать };