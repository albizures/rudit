import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соваться: PerfectVerb = {
  name: Word('соваться', 3),
  singular1stPerson: Word('суюсь', 2),
  singular2ndPerson: Word('суёшься', 6),
  singular3rdPerson: Word('суётся', 5),
  plural1stPerson: Word('суёмся', 5),
  plural2ndPerson: Word('суётесь', 4),
  plural3rdPerson: Word('суются', 2),
  masculinePast: Word('совался', 3),
  femininePast: Word('совалась', 3),
  neuterPast: Word('совалось', 3),
  pluralPast: Word('совались', 3),
  imperativeInformal: Word('суйся', 1),
  imperativeFormal: Word('суйтесь', 1),
  imperfect: [],
};

perfectVerbs.set(соваться.name.text, соваться);

export { соваться };