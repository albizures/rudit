import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нанизывать: PerfectVerb = {
  name: Word('нанизывать', 3),
  singular1stPerson: Word('нанизываю', 3),
  singular2ndPerson: Word('нанизываешь', 3),
  singular3rdPerson: Word('нанизывает', 3),
  plural1stPerson: Word('нанизываем', 3),
  plural2ndPerson: Word('нанизываете', 3),
  plural3rdPerson: Word('нанизывают', 3),
  masculinePast: Word('нанизывал', 3),
  femininePast: Word('нанизывала', 3),
  neuterPast: Word('нанизывало', 3),
  pluralPast: Word('нанизывали', 3),
  imperativeInformal: Word('нанизывай', 3),
  imperativeFormal: Word('нанизывайте', 3),
  imperfect: [],
};

perfectVerbs.set(нанизывать.name.text, нанизывать);

export { нанизывать };