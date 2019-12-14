import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истечь: PerfectVerb = {
  name: Word('истечь', 3),
  singular1stPerson: Word('истеку', 5),
  singular2ndPerson: Word('истечёшь', 3),
  singular3rdPerson: Word('истечёт', 3),
  plural1stPerson: Word('истечём', 3),
  plural2ndPerson: Word('истечёте', 3),
  plural3rdPerson: Word('истекут', 5),
  masculinePast: Word('истёк', 0),
  femininePast: Word('истекла', 6),
  neuterPast: Word('истекло', 6),
  pluralPast: Word('истекли', 6),
  imperativeInformal: Word('истеки', 5),
  imperativeFormal: Word('истеките', 5),
  imperfect: [],
};

perfectVerbs.set(истечь.name.text, истечь);

export { истечь };