import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уползать: PerfectVerb = {
  name: Word('уползать', 5),
  singular1stPerson: Word('уползаю', 5),
  singular2ndPerson: Word('уползаешь', 5),
  singular3rdPerson: Word('уползает', 5),
  plural1stPerson: Word('уползаем', 5),
  plural2ndPerson: Word('уползаете', 5),
  plural3rdPerson: Word('уползают', 5),
  masculinePast: Word('уползал', 5),
  femininePast: Word('уползала', 5),
  neuterPast: Word('уползало', 5),
  pluralPast: Word('уползали', 5),
  imperativeInformal: Word('уползай', 5),
  imperativeFormal: Word('уползайте', 5),
  imperfect: [],
};

perfectVerbs.set(уползать.name.text, уползать);

export { уползать };