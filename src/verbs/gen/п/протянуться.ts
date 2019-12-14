import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протянуться: PerfectVerb = {
  name: Word('протянуться', 6),
  singular1stPerson: Word('протянусь', 6),
  singular2ndPerson: Word('протянешься', 4),
  singular3rdPerson: Word('протянется', 4),
  plural1stPerson: Word('протянемся', 4),
  plural2ndPerson: Word('протянетесь', 4),
  plural3rdPerson: Word('протянутся', 4),
  masculinePast: Word('протянулся', 6),
  femininePast: Word('протянулась', 6),
  neuterPast: Word('протянулось', 6),
  pluralPast: Word('протянулись', 6),
  imperativeInformal: Word('протянись', 6),
  imperativeFormal: Word('протянитесь', 6),
  imperfect: [],
};

perfectVerbs.set(протянуться.name.text, протянуться);

export { протянуться };