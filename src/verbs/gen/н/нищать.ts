import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нищать: PerfectVerb = {
  name: Word('нищать', 3),
  singular1stPerson: Word('нищаю', 3),
  singular2ndPerson: Word('нищаешь', 3),
  singular3rdPerson: Word('нищает', 3),
  plural1stPerson: Word('нищаем', 3),
  plural2ndPerson: Word('нищаете', 3),
  plural3rdPerson: Word('нищают', 3),
  masculinePast: Word('нищал', 3),
  femininePast: Word('нищала', 3),
  neuterPast: Word('нищало', 3),
  pluralPast: Word('нищали', 3),
  imperativeInformal: Word('нищай', 3),
  imperativeFormal: Word('нищайте', 3),
  imperfect: [],
};

perfectVerbs.set(нищать.name.text, нищать);

export { нищать };