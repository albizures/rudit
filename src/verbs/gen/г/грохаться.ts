import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грохаться: PerfectVerb = {
  name: Word('грохаться', 2),
  singular1stPerson: Word('грохаюсь', 2),
  singular2ndPerson: Word('грохаешься', 2),
  singular3rdPerson: Word('грохается', 2),
  plural1stPerson: Word('грохаемся', 2),
  plural2ndPerson: Word('грохаетесь', 2),
  plural3rdPerson: Word('грохаются', 2),
  masculinePast: Word('грохался', 2),
  femininePast: Word('грохалась', 2),
  neuterPast: Word('грохалось', 2),
  pluralPast: Word('грохались', 2),
  imperativeInformal: Word('грохайся', 2),
  imperativeFormal: Word('грохайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(грохаться.name.text, грохаться);

export { грохаться };