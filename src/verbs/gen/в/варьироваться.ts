import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const варьироваться: PerfectVerb = {
  name: Word('варьироваться', 4),
  singular1stPerson: Word('варьируюсь', 4),
  singular2ndPerson: Word('варьируешься', 4),
  singular3rdPerson: Word('варьируется', 4),
  plural1stPerson: Word('варьируемся', 4),
  plural2ndPerson: Word('варьируетесь', 4),
  plural3rdPerson: Word('варьируются', 4),
  masculinePast: Word('варьировался', 4),
  femininePast: Word('варьировалась', 4),
  neuterPast: Word('варьировалось', 4),
  pluralPast: Word('варьировались', 4),
  imperativeInformal: Word('варьируйся', 4),
  imperativeFormal: Word('варьируйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(варьироваться.name.text, варьироваться);

export { варьироваться };