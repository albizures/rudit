import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкладывать: PerfectVerb = {
  name: Word('вкладывать', 3),
  singular1stPerson: Word('вкладываю', 3),
  singular2ndPerson: Word('вкладываешь', 3),
  singular3rdPerson: Word('вкладывает', 3),
  plural1stPerson: Word('вкладываем', 3),
  plural2ndPerson: Word('вкладываете', 3),
  plural3rdPerson: Word('вкладывают', 3),
  masculinePast: Word('вкладывал', 3),
  femininePast: Word('вкладывала', 3),
  neuterPast: Word('вкладывало', 3),
  pluralPast: Word('вкладывали', 3),
  imperativeInformal: Word('вкладывай', 3),
  imperativeFormal: Word('вкладывайте', 3),
  imperfect: [],
};

perfectVerbs.set(вкладывать.name.text, вкладывать);

export { вкладывать };