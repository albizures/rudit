import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добираться: PerfectVerb = {
  name: Word('добираться', 5),
  singular1stPerson: Word('добираюсь', 5),
  singular2ndPerson: Word('добираешься', 5),
  singular3rdPerson: Word('добирается', 5),
  plural1stPerson: Word('добираемся', 5),
  plural2ndPerson: Word('добираетесь', 5),
  plural3rdPerson: Word('добираются', 5),
  masculinePast: Word('добирался', 5),
  femininePast: Word('добиралась', 5),
  neuterPast: Word('добиралось', 5),
  pluralPast: Word('добирались', 5),
  imperativeInformal: Word('добирайся', 5),
  imperativeFormal: Word('добирайтесь', 5),
  imperfect: ['добраться'],
};

perfectVerbs.set(добираться.name.text, добираться);

export { добираться };