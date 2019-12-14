import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истираться: PerfectVerb = {
  name: Word('истираться', 5),
  singular1stPerson: Word('истираюсь', 5),
  singular2ndPerson: Word('истираешься', 5),
  singular3rdPerson: Word('истирается', 5),
  plural1stPerson: Word('истираемся', 5),
  plural2ndPerson: Word('истираетесь', 5),
  plural3rdPerson: Word('истираются', 5),
  masculinePast: Word('истирался', 5),
  femininePast: Word('истиралась', 5),
  neuterPast: Word('истиралось', 5),
  pluralPast: Word('истирались', 5),
  imperativeInformal: Word('истирайся', 5),
  imperativeFormal: Word('истирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(истираться.name.text, истираться);

export { истираться };