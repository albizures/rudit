import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбираться: PerfectVerb = {
  name: Word('выбираться', 5),
  singular1stPerson: Word('выбираюсь', 5),
  singular2ndPerson: Word('выбираешься', 5),
  singular3rdPerson: Word('выбирается', 5),
  plural1stPerson: Word('выбираемся', 5),
  plural2ndPerson: Word('выбираетесь', 5),
  plural3rdPerson: Word('выбираются', 5),
  masculinePast: Word('выбирался', 5),
  femininePast: Word('выбиралась', 5),
  neuterPast: Word('выбиралось', 5),
  pluralPast: Word('выбирались', 5),
  imperativeInformal: Word('выбирайся', 5),
  imperativeFormal: Word('выбирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выбираться.name.text, выбираться);

export { выбираться };