import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пускаться: PerfectVerb = {
  name: Word('пускаться', 4),
  singular1stPerson: Word('пускаюсь', 4),
  singular2ndPerson: Word('пускаешься', 4),
  singular3rdPerson: Word('пускается', 4),
  plural1stPerson: Word('пускаемся', 4),
  plural2ndPerson: Word('пускаетесь', 4),
  plural3rdPerson: Word('пускаются', 4),
  masculinePast: Word('пускался', 4),
  femininePast: Word('пускалась', 4),
  neuterPast: Word('пускалось', 4),
  pluralPast: Word('пускались', 4),
  imperativeInformal: Word('пускайся', 4),
  imperativeFormal: Word('пускайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(пускаться.name.text, пускаться);

export { пускаться };