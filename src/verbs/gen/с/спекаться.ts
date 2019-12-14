import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спекаться: PerfectVerb = {
  name: Word('спекаться', 4),
  singular1stPerson: Word('спекаюсь', 4),
  singular2ndPerson: Word('спекаешься', 4),
  singular3rdPerson: Word('спекается', 4),
  plural1stPerson: Word('спекаемся', 4),
  plural2ndPerson: Word('спекаетесь', 4),
  plural3rdPerson: Word('спекаются', 4),
  masculinePast: Word('спекался', 4),
  femininePast: Word('спекалась', 4),
  neuterPast: Word('спекалось', 4),
  pluralPast: Word('спекались', 4),
  imperativeInformal: Word('спекайся', 4),
  imperativeFormal: Word('спекайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(спекаться.name.text, спекаться);

export { спекаться };