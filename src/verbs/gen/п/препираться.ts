import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const препираться: PerfectVerb = {
  name: Word('препираться', 6),
  singular1stPerson: Word('препираюсь', 6),
  singular2ndPerson: Word('препираешься', 6),
  singular3rdPerson: Word('препирается', 6),
  plural1stPerson: Word('препираемся', 6),
  plural2ndPerson: Word('препираетесь', 6),
  plural3rdPerson: Word('препираются', 6),
  masculinePast: Word('препирался', 6),
  femininePast: Word('препиралась', 6),
  neuterPast: Word('препиралось', 6),
  pluralPast: Word('препирались', 6),
  imperativeInformal: Word('препирайся', 6),
  imperativeFormal: Word('препирайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(препираться.name.text, препираться);

export { препираться };