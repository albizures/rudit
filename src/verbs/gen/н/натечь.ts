import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натечь: PerfectVerb = {
  name: Word('натечь', 3),
  singular1stPerson: Word('натеку', 5),
  singular2ndPerson: Word('натечёшь', 5),
  singular3rdPerson: Word('натечёт', 5),
  plural1stPerson: Word('натечём', 5),
  plural2ndPerson: Word('натечёте', 5),
  plural3rdPerson: Word('натекут', 5),
  masculinePast: Word('натёк', 3),
  femininePast: Word('натекла', 6),
  neuterPast: Word('натекло', 6),
  pluralPast: Word('натекли', 6),
  imperativeInformal: Word('натеки', 5),
  imperativeFormal: Word('натеките', 5),
  imperfect: [],
};

perfectVerbs.set(натечь.name.text, натечь);

export { натечь };