import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const украшаться: PerfectVerb = {
  name: Word('украшаться', 5),
  singular1stPerson: Word('украшаюсь', 5),
  singular2ndPerson: Word('украшаешься', 5),
  singular3rdPerson: Word('украшается', 5),
  plural1stPerson: Word('украшаемся', 5),
  plural2ndPerson: Word('украшаетесь', 5),
  plural3rdPerson: Word('украшаются', 5),
  masculinePast: Word('украшался', 5),
  femininePast: Word('украшалась', 5),
  neuterPast: Word('украшалось', 5),
  pluralPast: Word('украшались', 5),
  imperativeInformal: Word('украшайся', 5),
  imperativeFormal: Word('украшайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(украшаться.name.text, украшаться);

export { украшаться };