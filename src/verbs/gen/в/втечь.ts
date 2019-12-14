import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втечь: PerfectVerb = {
  name: Word('втечь', 2),
  singular1stPerson: Word('втеку', 4),
  singular2ndPerson: Word('втечёшь', 2),
  singular3rdPerson: Word('втечёт', 2),
  plural1stPerson: Word('втечём', 2),
  plural2ndPerson: Word('втечёте', 2),
  plural3rdPerson: Word('втекут', 4),
  masculinePast: Word('втёк', 2),
  femininePast: Word('втекла', 5),
  neuterPast: Word('втекло', 5),
  pluralPast: Word('втекли', 5),
  imperativeInformal: Word('втеки', 4),
  imperativeFormal: Word('втеките', 4),
  imperfect: [],
};

perfectVerbs.set(втечь.name.text, втечь);

export { втечь };