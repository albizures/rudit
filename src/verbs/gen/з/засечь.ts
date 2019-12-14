import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засечь: PerfectVerb = {
  name: Word('засечь', 3),
  singular1stPerson: Word('засеку', 5),
  singular2ndPerson: Word('засечёшь', 5),
  singular3rdPerson: Word('засечёт', 5),
  plural1stPerson: Word('засечём', 5),
  plural2ndPerson: Word('засечёте', 5),
  plural3rdPerson: Word('засекут', 5),
  masculinePast: Word('засёк', 3),
  femininePast: Word('засекла', 6),
  neuterPast: Word('засекло', 6),
  pluralPast: Word('засекли', 6),
  imperativeInformal: Word('засеки', 5),
  imperativeFormal: Word('засеките', 5),
  imperfect: [],
};

perfectVerbs.set(засечь.name.text, засечь);

export { засечь };