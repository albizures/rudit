import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмолвиться: PerfectVerb = {
  name: Word('обмолвиться', 3),
  singular1stPerson: Word('обмолвлюсь', 3),
  singular2ndPerson: Word('обмолвишься', 3),
  singular3rdPerson: Word('обмолвится', 3),
  plural1stPerson: Word('обмолвимся', 3),
  plural2ndPerson: Word('обмолвитесь', 3),
  plural3rdPerson: Word('обмолвятся', 3),
  masculinePast: Word('обмолвился', 3),
  femininePast: Word('обмолвилась', 3),
  neuterPast: Word('обмолвилось', 3),
  pluralPast: Word('обмолвились', 3),
  imperativeInformal: Word('обмолвись', 3),
  imperativeFormal: Word('обмолвитесь', 3),
  imperfect: [],
};

perfectVerbs.set(обмолвиться.name.text, обмолвиться);

export { обмолвиться };