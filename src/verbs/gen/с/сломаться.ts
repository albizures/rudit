import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сломаться: PerfectVerb = {
  name: Word('сломаться', 4),
  singular1stPerson: Word('сломаюсь', 4),
  singular2ndPerson: Word('сломаешься', 4),
  singular3rdPerson: Word('сломается', 4),
  plural1stPerson: Word('сломаемся', 4),
  plural2ndPerson: Word('сломаетесь', 4),
  plural3rdPerson: Word('сломаются', 4),
  masculinePast: Word('сломался', 4),
  femininePast: Word('сломалась', 4),
  neuterPast: Word('сломалось', 4),
  pluralPast: Word('сломались', 4),
  imperativeInformal: Word('сломайся', 4),
  imperativeFormal: Word('сломайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сломаться.name.text, сломаться);

export { сломаться };