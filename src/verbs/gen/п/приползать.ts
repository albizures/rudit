import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приползать: PerfectVerb = {
  name: Word('приползать', 7),
  singular1stPerson: Word('приползаю', 7),
  singular2ndPerson: Word('приползаешь', 7),
  singular3rdPerson: Word('приползает', 7),
  plural1stPerson: Word('приползаем', 7),
  plural2ndPerson: Word('приползаете', 7),
  plural3rdPerson: Word('приползают', 7),
  masculinePast: Word('приползал', 7),
  femininePast: Word('приползала', 7),
  neuterPast: Word('приползало', 7),
  pluralPast: Word('приползали', 7),
  imperativeInformal: Word('приползай', 7),
  imperativeFormal: Word('приползайте', 7),
  imperfect: [],
};

perfectVerbs.set(приползать.name.text, приползать);

export { приползать };