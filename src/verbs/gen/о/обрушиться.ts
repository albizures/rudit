import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрушиться: PerfectVerb = {
  name: Word('обрушиться', 3),
  singular1stPerson: Word('обрушусь', 3),
  singular2ndPerson: Word('обрушишься', 3),
  singular3rdPerson: Word('обрушится', 3),
  plural1stPerson: Word('обрушимся', 3),
  plural2ndPerson: Word('обрушитесь', 3),
  plural3rdPerson: Word('обрушатся', 3),
  masculinePast: Word('обрушился', 3),
  femininePast: Word('обрушилась', 3),
  neuterPast: Word('обрушилось', 3),
  pluralPast: Word('обрушились', 3),
  imperativeInformal: Word('обрушься', 3),
  imperativeFormal: Word('обрушьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обрушиться.name.text, обрушиться);

export { обрушиться };