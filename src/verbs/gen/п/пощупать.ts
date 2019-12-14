import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пощупать: PerfectVerb = {
  name: Word('пощупать', 3),
  singular1stPerson: Word('пощупаю', 3),
  singular2ndPerson: Word('пощупаешь', 3),
  singular3rdPerson: Word('пощупает', 3),
  plural1stPerson: Word('пощупаем', 3),
  plural2ndPerson: Word('пощупаете', 3),
  plural3rdPerson: Word('пощупают', 3),
  masculinePast: Word('пощупал', 3),
  femininePast: Word('пощупала', 3),
  neuterPast: Word('пощупало', 3),
  pluralPast: Word('пощупали', 3),
  imperativeInformal: Word('пощупай', 3),
  imperativeFormal: Word('пощупайте', 3),
  imperfect: [],
};

perfectVerbs.set(пощупать.name.text, пощупать);

export { пощупать };