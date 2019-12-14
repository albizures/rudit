import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восстать: PerfectVerb = {
  name: Word('восстать', 5),
  singular1stPerson: Word('восстану', 5),
  singular2ndPerson: Word('восстанешь', 5),
  singular3rdPerson: Word('восстанет', 5),
  plural1stPerson: Word('восстанем', 5),
  plural2ndPerson: Word('восстанете', 5),
  plural3rdPerson: Word('восстанут', 5),
  masculinePast: Word('восстал', 5),
  femininePast: Word('восстала', 5),
  neuterPast: Word('восстало', 5),
  pluralPast: Word('восстали', 5),
  imperativeInformal: Word('восстань', 5),
  imperativeFormal: Word('восстаньте', 5),
  imperfect: ['восставать'],
};

perfectVerbs.set(восстать.name.text, восстать);

export { восстать };