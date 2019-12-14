import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const беречься: PerfectVerb = {
  name: Word('беречься', 3),
  singular1stPerson: Word('берегусь', 5),
  singular2ndPerson: Word('бережёшься', 5),
  singular3rdPerson: Word('бережётся', 5),
  plural1stPerson: Word('бережёмся', 5),
  plural2ndPerson: Word('бережётесь', 5),
  plural3rdPerson: Word('берегутся', 5),
  masculinePast: Word('берёгся', 3),
  femininePast: Word('береглась', 6),
  neuterPast: Word('береглось', 6),
  pluralPast: Word('береглись', 6),
  imperativeInformal: Word('берегись', 5),
  imperativeFormal: Word('берегитесь', 5),
  imperfect: ['поберечься'],
};

perfectVerbs.set(беречься.name.text, беречься);

export { беречься };