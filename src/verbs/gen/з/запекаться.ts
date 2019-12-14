import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запекаться: PerfectVerb = {
  name: Word('запекаться', 5),
  singular1stPerson: Word('запекаюсь', 5),
  singular2ndPerson: Word('запекаешься', 5),
  singular3rdPerson: Word('запекается', 5),
  plural1stPerson: Word('запекаемся', 5),
  plural2ndPerson: Word('запекаетесь', 5),
  plural3rdPerson: Word('запекаются', 5),
  masculinePast: Word('запекался', 5),
  femininePast: Word('запекалась', 5),
  neuterPast: Word('запекалось', 5),
  pluralPast: Word('запекались', 5),
  imperativeInformal: Word('запекайся', 5),
  imperativeFormal: Word('запекайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(запекаться.name.text, запекаться);

export { запекаться };