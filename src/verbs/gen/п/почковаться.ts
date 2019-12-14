import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почковаться: PerfectVerb = {
  name: Word('почковаться', 6),
  singular1stPerson: Word('почкуюсь', 4),
  singular2ndPerson: Word('почкуешься', 4),
  singular3rdPerson: Word('почкуется', 4),
  plural1stPerson: Word('почкуемся', 4),
  plural2ndPerson: Word('почкуетесь', 4),
  plural3rdPerson: Word('почкуются', 4),
  masculinePast: Word('почковался', 6),
  femininePast: Word('почковалась', 6),
  neuterPast: Word('почковалось', 6),
  pluralPast: Word('почковались', 6),
  imperativeInformal: Word('почкуйся', 4),
  imperativeFormal: Word('почкуйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(почковаться.name.text, почковаться);

export { почковаться };