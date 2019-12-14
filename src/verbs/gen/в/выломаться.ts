import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выломаться: PerfectVerb = {
  name: Word('выломаться', 1),
  singular1stPerson: Word('выломаюсь', 1),
  singular2ndPerson: Word('выломаешься', 1),
  singular3rdPerson: Word('выломается', 1),
  plural1stPerson: Word('выломаемся', 1),
  plural2ndPerson: Word('выломаетесь', 1),
  plural3rdPerson: Word('выломаются', 1),
  masculinePast: Word('выломался', 1),
  femininePast: Word('выломалась', 1),
  neuterPast: Word('выломалось', 1),
  pluralPast: Word('выломались', 1),
  imperativeInformal: Word('выломайся', 1),
  imperativeFormal: Word('выломайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выломаться.name.text, выломаться);

export { выломаться };