import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсушиться: PerfectVerb = {
  name: Word('обсушиться', 5),
  singular1stPerson: Word('обсушусь', 5),
  singular2ndPerson: Word('обсушишься', 3),
  singular3rdPerson: Word('обсушится', 3),
  plural1stPerson: Word('обсушимся', 3),
  plural2ndPerson: Word('обсушитесь', 3),
  plural3rdPerson: Word('обсушатся', 3),
  masculinePast: Word('обсушился', 5),
  femininePast: Word('обсушилась', 5),
  neuterPast: Word('обсушилось', 5),
  pluralPast: Word('обсушились', 5),
  imperativeInformal: Word('обсушись', 5),
  imperativeFormal: Word('обсушитесь', 5),
  imperfect: [],
};

perfectVerbs.set(обсушиться.name.text, обсушиться);

export { обсушиться };