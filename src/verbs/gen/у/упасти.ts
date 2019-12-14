import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упасти: PerfectVerb = {
  name: Word('упасти', 5),
  singular1stPerson: Word('упасу', 4),
  singular2ndPerson: Word('упасёшь', 2),
  singular3rdPerson: Word('упасёт', 2),
  plural1stPerson: Word('упасём', 2),
  plural2ndPerson: Word('упасёте', 2),
  plural3rdPerson: Word('упасут', 4),
  masculinePast: Word('упас', 2),
  femininePast: Word('упасла', 5),
  neuterPast: Word('упасло', 5),
  pluralPast: Word('упасли', 5),
  imperativeInformal: Word('упаси', 4),
  imperativeFormal: Word('упасите', 4),
  imperfect: [],
};

perfectVerbs.set(упасти.name.text, упасти);

export { упасти };