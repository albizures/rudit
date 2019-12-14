import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const учесть: PerfectVerb = {
  name: Word('учесть', 2),
  singular1stPerson: Word('учту', 3),
  singular2ndPerson: Word('учтёшь', 3),
  singular3rdPerson: Word('учтёт', 3),
  plural1stPerson: Word('учтём', 3),
  plural2ndPerson: Word('учтёте', 3),
  plural3rdPerson: Word('учтут', 3),
  masculinePast: Word('учёл', 2),
  femininePast: Word('учла', 3),
  neuterPast: Word('учло', 3),
  pluralPast: Word('учли', 3),
  imperativeInformal: Word('учти', 3),
  imperativeFormal: Word('учтите', 3),
  imperfect: ['учитывать'],
};

perfectVerbs.set(учесть.name.text, учесть);

export { учесть };