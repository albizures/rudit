import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ушибить: PerfectVerb = {
  name: Word('ушибить', 4),
  singular1stPerson: Word('ушибу', 4),
  singular2ndPerson: Word('ушибёшь', 4),
  singular3rdPerson: Word('ушибёт', 4),
  plural1stPerson: Word('ушибём', 4),
  plural2ndPerson: Word('ушибёте', 4),
  plural3rdPerson: Word('ушибут', 4),
  masculinePast: Word('ушиб', 2),
  femininePast: Word('ушибла', 2),
  neuterPast: Word('ушибло', 2),
  pluralPast: Word('ушибли', 2),
  imperativeInformal: Word('ушиби', 4),
  imperativeFormal: Word('ушибите', 4),
  imperfect: [],
};

perfectVerbs.set(ушибить.name.text, ушибить);

export { ушибить };