import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поломаться: PerfectVerb = {
  name: Word('поломаться', 5),
  singular1stPerson: Word('поломаюсь', 5),
  singular2ndPerson: Word('поломаешься', 5),
  singular3rdPerson: Word('поломается', 5),
  plural1stPerson: Word('поломаемся', 5),
  plural2ndPerson: Word('поломаетесь', 5),
  plural3rdPerson: Word('поломаются', 5),
  masculinePast: Word('поломался', 5),
  femininePast: Word('поломалась', 5),
  neuterPast: Word('поломалось', 5),
  pluralPast: Word('поломались', 5),
  imperativeInformal: Word('поломайся', 5),
  imperativeFormal: Word('поломайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(поломаться.name.text, поломаться);

export { поломаться };