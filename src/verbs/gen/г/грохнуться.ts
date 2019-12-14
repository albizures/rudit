import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грохнуться: PerfectVerb = {
  name: Word('грохнуться', 2),
  singular1stPerson: Word('грохнусь', 2),
  singular2ndPerson: Word('грохнешься', 2),
  singular3rdPerson: Word('грохнется', 2),
  plural1stPerson: Word('грохнемся', 2),
  plural2ndPerson: Word('грохнетесь', 2),
  plural3rdPerson: Word('грохнутся', 2),
  masculinePast: Word('грохнулся', 2),
  femininePast: Word('грохнулась', 2),
  neuterPast: Word('грохнулось', 2),
  pluralPast: Word('грохнулись', 2),
  imperativeInformal: Word('грохнись', 2),
  imperativeFormal: Word('грохнитесь', 2),
  imperfect: ['грохаться'],
};

perfectVerbs.set(грохнуться.name.text, грохнуться);

export { грохнуться };