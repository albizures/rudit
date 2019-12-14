import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обеспокоиться: PerfectVerb = {
  name: Word('обеспокоиться', 7),
  singular1stPerson: Word('обеспокоюсь', 7),
  singular2ndPerson: Word('обеспокоишься', 7),
  singular3rdPerson: Word('обеспокоится', 7),
  plural1stPerson: Word('обеспокоимся', 7),
  plural2ndPerson: Word('обеспокоитесь', 7),
  plural3rdPerson: Word('обеспокоятся', 7),
  masculinePast: Word('обеспокоился', 7),
  femininePast: Word('обеспокоилась', 7),
  neuterPast: Word('обеспокоилось', 7),
  pluralPast: Word('обеспокоились', 7),
  imperativeInformal: Word('обеспокойся', 7),
  imperativeFormal: Word('обеспокойтесь', 7),
  imperfect: [],
};

perfectVerbs.set(обеспокоиться.name.text, обеспокоиться);

export { обеспокоиться };