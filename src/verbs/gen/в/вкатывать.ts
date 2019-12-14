import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкатывать: PerfectVerb = {
  name: Word('вкатывать', 2),
  singular1stPerson: Word('вкатываю', 2),
  singular2ndPerson: Word('вкатываешь', 2),
  singular3rdPerson: Word('вкатывает', 2),
  plural1stPerson: Word('вкатываем', 2),
  plural2ndPerson: Word('вкатываете', 2),
  plural3rdPerson: Word('вкатывают', 2),
  masculinePast: Word('вкатывал', 2),
  femininePast: Word('вкатывала', 2),
  neuterPast: Word('вкатывало', 2),
  pluralPast: Word('вкатывали', 2),
  imperativeInformal: Word('вкатывай', 2),
  imperativeFormal: Word('вкатывайте', 2),
  imperfect: [],
};

perfectVerbs.set(вкатывать.name.text, вкатывать);

export { вкатывать };