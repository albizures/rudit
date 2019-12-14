import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истечь: PerfectVerb = {
  name: Word('истечь', 3),
  singular1stPerson: Word('истеку', 5),
  singular2ndPerson: Word('истечёшь', 5),
  singular3rdPerson: Word('истечёт', 5),
  plural1stPerson: Word('истечём', 5),
  plural2ndPerson: Word('истечёте', 5),
  plural3rdPerson: Word('истекут', 5),
  masculinePast: Word('истёк', 3),
  femininePast: Word('истекла', 6),
  neuterPast: Word('истекло', 6),
  pluralPast: Word('истекли', 6),
  imperativeInformal: Word('истеки', 5),
  imperativeFormal: Word('истеките', 5),
  imperfect: [],
};

perfectVerbs.set(истечь.name.text, истечь);

export { истечь };