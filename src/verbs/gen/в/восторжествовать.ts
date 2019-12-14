import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восторжествовать: PerfectVerb = {
  name: Word('восторжествовать', 13),
  singular1stPerson: Word('восторжествую', 11),
  singular2ndPerson: Word('восторжествуешь', 11),
  singular3rdPerson: Word('восторжествует', 11),
  plural1stPerson: Word('восторжествуем', 11),
  plural2ndPerson: Word('восторжествуете', 11),
  plural3rdPerson: Word('восторжествуют', 11),
  masculinePast: Word('восторжествовал', 13),
  femininePast: Word('восторжествовала', 13),
  neuterPast: Word('восторжествовало', 13),
  pluralPast: Word('восторжествовали', 13),
  imperativeInformal: Word('восторжествуй', 11),
  imperativeFormal: Word('восторжествуйте', 11),
  imperfect: [],
};

perfectVerbs.set(восторжествовать.name.text, восторжествовать);

export { восторжествовать };