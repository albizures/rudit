import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазеваться: PerfectVerb = {
  name: Word('зазеваться', 5),
  singular1stPerson: Word('зазеваюсь', 5),
  singular2ndPerson: Word('зазеваешься', 5),
  singular3rdPerson: Word('зазевается', 5),
  plural1stPerson: Word('зазеваемся', 5),
  plural2ndPerson: Word('зазеваетесь', 5),
  plural3rdPerson: Word('зазеваются', 5),
  masculinePast: Word('зазевался', 5),
  femininePast: Word('зазевалась', 5),
  neuterPast: Word('зазевалось', 5),
  pluralPast: Word('зазевались', 5),
  imperativeInformal: Word('зазевайся', 5),
  imperativeFormal: Word('зазевайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(зазеваться.name.text, зазеваться);

export { зазеваться };