import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскрошиться: PerfectVerb = {
  name: Word('раскрошиться', 7),
  singular1stPerson: Word('раскрошусь', 7),
  singular2ndPerson: Word('раскрошишься', 5),
  singular3rdPerson: Word('раскрошится', 5),
  plural1stPerson: Word('раскрошимся', 5),
  plural2ndPerson: Word('раскрошитесь', 5),
  plural3rdPerson: Word('раскрошатся', 5),
  masculinePast: Word('раскрошился', 7),
  femininePast: Word('раскрошилась', 7),
  neuterPast: Word('раскрошилось', 7),
  pluralPast: Word('раскрошились', 7),
  imperativeInformal: Word('раскрошись', 7),
  imperativeFormal: Word('раскрошитесь', 7),
  imperfect: [],
};

perfectVerbs.set(раскрошиться.name.text, раскрошиться);

export { раскрошиться };