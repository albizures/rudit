import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпекаться: PerfectVerb = {
  name: Word('выпекаться', 5),
  singular1stPerson: Word('выпекаюсь', 5),
  singular2ndPerson: Word('выпекаешься', 5),
  singular3rdPerson: Word('выпекается', 5),
  plural1stPerson: Word('выпекаемся', 5),
  plural2ndPerson: Word('выпекаетесь', 5),
  plural3rdPerson: Word('выпекаются', 5),
  masculinePast: Word('выпекался', 5),
  femininePast: Word('выпекалась', 5),
  neuterPast: Word('выпекалось', 5),
  pluralPast: Word('выпекались', 5),
  imperativeInformal: Word('выпекайся', 5),
  imperativeFormal: Word('выпекайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выпекаться.name.text, выпекаться);

export { выпекаться };