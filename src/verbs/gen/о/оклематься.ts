import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оклематься: PerfectVerb = {
  name: Word('оклематься', 5),
  singular1stPerson: Word('оклемаюсь', 5),
  singular2ndPerson: Word('оклемаешься', 5),
  singular3rdPerson: Word('оклемается', 5),
  plural1stPerson: Word('оклемаемся', 5),
  plural2ndPerson: Word('оклемаетесь', 5),
  plural3rdPerson: Word('оклемаются', 5),
  masculinePast: Word('оклемался', 5),
  femininePast: Word('оклемалась', 5),
  neuterPast: Word('оклемалось', 5),
  pluralPast: Word('оклемались', 5),
  imperativeInformal: Word('оклемайся', 5),
  imperativeFormal: Word('оклемайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(оклематься.name.text, оклематься);

export { оклематься };