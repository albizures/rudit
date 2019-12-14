import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подковаться: PerfectVerb = {
  name: Word('подковаться', 6),
  singular1stPerson: Word('подкуюсь', 5),
  singular2ndPerson: Word('подкуёшься', 1),
  singular3rdPerson: Word('подкуётся', 1),
  plural1stPerson: Word('подкуёмся', 1),
  plural2ndPerson: Word('подкуётесь', 7),
  plural3rdPerson: Word('подкуются', 5),
  masculinePast: Word('подковался', 6),
  femininePast: Word('подковалась', 6),
  neuterPast: Word('подковалось', 6),
  pluralPast: Word('подковались', 6),
  imperativeInformal: Word('подкуйся', 4),
  imperativeFormal: Word('подкуйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подковаться.name.text, подковаться);

export { подковаться };