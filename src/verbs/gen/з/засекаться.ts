import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засекаться: PerfectVerb = {
  name: Word('засекаться', 5),
  singular1stPerson: Word('засекаюсь', 5),
  singular2ndPerson: Word('засекаешься', 5),
  singular3rdPerson: Word('засекается', 5),
  plural1stPerson: Word('засекаемся', 5),
  plural2ndPerson: Word('засекаетесь', 5),
  plural3rdPerson: Word('засекаются', 5),
  masculinePast: Word('засекался', 5),
  femininePast: Word('засекалась', 5),
  neuterPast: Word('засекалось', 5),
  pluralPast: Word('засекались', 5),
  imperativeInformal: Word('засекайся', 5),
  imperativeFormal: Word('засекайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(засекаться.name.text, засекаться);

export { засекаться };