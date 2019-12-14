import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убираться: PerfectVerb = {
  name: Word('убираться', 4),
  singular1stPerson: Word('убираюсь', 4),
  singular2ndPerson: Word('убираешься', 4),
  singular3rdPerson: Word('убирается', 4),
  plural1stPerson: Word('убираемся', 4),
  plural2ndPerson: Word('убираетесь', 4),
  plural3rdPerson: Word('убираются', 4),
  masculinePast: Word('убирался', 4),
  femininePast: Word('убиралась', 4),
  neuterPast: Word('убиралось', 4),
  pluralPast: Word('убирались', 4),
  imperativeInformal: Word('убирайся', 4),
  imperativeFormal: Word('убирайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(убираться.name.text, убираться);

export { убираться };