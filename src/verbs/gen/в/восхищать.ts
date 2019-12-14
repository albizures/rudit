import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восхищать: PerfectVerb = {
  name: Word('восхищать', 6),
  singular1stPerson: Word('восхищаю', 6),
  singular2ndPerson: Word('восхищаешь', 6),
  singular3rdPerson: Word('восхищает', 6),
  plural1stPerson: Word('восхищаем', 6),
  plural2ndPerson: Word('восхищаете', 6),
  plural3rdPerson: Word('восхищают', 6),
  masculinePast: Word('восхищал', 6),
  femininePast: Word('восхищала', 6),
  neuterPast: Word('восхищало', 6),
  pluralPast: Word('восхищали', 6),
  imperativeInformal: Word('восхищай', 6),
  imperativeFormal: Word('восхищайте', 6),
  imperfect: [],
};

perfectVerbs.set(восхищать.name.text, восхищать);

export { восхищать };