import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развеваться: PerfectVerb = {
  name: Word('развеваться', 6),
  singular1stPerson: Word('развеваюсь', 6),
  singular2ndPerson: Word('развеваешься', 6),
  singular3rdPerson: Word('развевается', 6),
  plural1stPerson: Word('развеваемся', 6),
  plural2ndPerson: Word('развеваетесь', 6),
  plural3rdPerson: Word('развеваются', 6),
  masculinePast: Word('развевался', 6),
  femininePast: Word('развевалась', 6),
  neuterPast: Word('развевалось', 6),
  pluralPast: Word('развевались', 6),
  imperativeInformal: Word('развевайся', 6),
  imperativeFormal: Word('развевайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(развеваться.name.text, развеваться);

export { развеваться };