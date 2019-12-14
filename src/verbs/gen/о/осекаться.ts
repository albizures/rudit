import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осекаться: PerfectVerb = {
  name: Word('осекаться', 4),
  singular1stPerson: Word('осекаюсь', 4),
  singular2ndPerson: Word('осекаешься', 4),
  singular3rdPerson: Word('осекается', 4),
  plural1stPerson: Word('осекаемся', 4),
  plural2ndPerson: Word('осекаетесь', 4),
  plural3rdPerson: Word('осекаются', 4),
  masculinePast: Word('осекался', 4),
  femininePast: Word('осекалась', 4),
  neuterPast: Word('осекалось', 4),
  pluralPast: Word('осекались', 4),
  imperativeInformal: Word('осекайся', 4),
  imperativeFormal: Word('осекайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(осекаться.name.text, осекаться);

export { осекаться };