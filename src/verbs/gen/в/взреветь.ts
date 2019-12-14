import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взреветь: PerfectVerb = {
  name: Word('взреветь', 5),
  singular1stPerson: Word('взреву', 5),
  singular2ndPerson: Word('взревёшь', 3),
  singular3rdPerson: Word('взревёт', 3),
  plural1stPerson: Word('взревём', 3),
  plural2ndPerson: Word('взревёте', 3),
  plural3rdPerson: Word('взревут', 5),
  masculinePast: Word('взревел', 5),
  femininePast: Word('взревела', 5),
  neuterPast: Word('взревело', 5),
  pluralPast: Word('взревели', 5),
  imperativeInformal: Word('взреви', 5),
  imperativeFormal: Word('взревите', 5),
  imperfect: [],
};

perfectVerbs.set(взреветь.name.text, взреветь);

export { взреветь };