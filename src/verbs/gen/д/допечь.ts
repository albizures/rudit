import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допечь: PerfectVerb = {
  name: Word('допечь', 3),
  singular1stPerson: Word('допеку', 5),
  singular2ndPerson: Word('допечёшь', 5),
  singular3rdPerson: Word('допечёт', 5),
  plural1stPerson: Word('допечём', 5),
  plural2ndPerson: Word('допечёте', 5),
  plural3rdPerson: Word('допекут', 5),
  masculinePast: Word('допёк', 3),
  femininePast: Word('допекла', 6),
  neuterPast: Word('допекло', 6),
  pluralPast: Word('допекли', 6),
  imperativeInformal: Word('допеки', 5),
  imperativeFormal: Word('допеките', 5),
  imperfect: [],
};

perfectVerbs.set(допечь.name.text, допечь);

export { допечь };