import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пукать: PerfectVerb = {
  name: Word('пукать', 1),
  singular1stPerson: Word('пукаю', 1),
  singular2ndPerson: Word('пукаешь', 1),
  singular3rdPerson: Word('пукает', 1),
  plural1stPerson: Word('пукаем', 1),
  plural2ndPerson: Word('пукаете', 1),
  plural3rdPerson: Word('пукают', 1),
  masculinePast: Word('пукал', 1),
  femininePast: Word('пукала', 1),
  neuterPast: Word('пукало', 1),
  pluralPast: Word('пукали', 1),
  imperativeInformal: Word('пукай', 1),
  imperativeFormal: Word('пукайте', 1),
  imperfect: ['пукнуть'],
};

perfectVerbs.set(пукать.name.text, пукать);

export { пукать };