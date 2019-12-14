import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const беречь: PerfectVerb = {
  name: Word('беречь', 3),
  singular1stPerson: Word('берегу', 5),
  singular2ndPerson: Word('бережёшь', 5),
  singular3rdPerson: Word('бережёт', 5),
  plural1stPerson: Word('бережём', 5),
  plural2ndPerson: Word('бережёте', 5),
  plural3rdPerson: Word('берегут', 5),
  masculinePast: Word('берёг', 3),
  femininePast: Word('берегла', 6),
  neuterPast: Word('берегло', 6),
  pluralPast: Word('берегли', 6),
  imperativeInformal: Word('береги', 5),
  imperativeFormal: Word('берегите', 5),
  imperfect: ['сберечь','уберечь'],
};

perfectVerbs.set(беречь.name.text, беречь);

export { беречь };