import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const врубаться: PerfectVerb = {
  name: Word('врубаться', 4),
  singular1stPerson: Word('врубаюсь', 4),
  singular2ndPerson: Word('врубаешься', 4),
  singular3rdPerson: Word('врубается', 4),
  plural1stPerson: Word('врубаемся', 4),
  plural2ndPerson: Word('врубаетесь', 4),
  plural3rdPerson: Word('врубаются', 4),
  masculinePast: Word('врубался', 4),
  femininePast: Word('врубалась', 4),
  neuterPast: Word('врубалось', 4),
  pluralPast: Word('врубались', 4),
  imperativeInformal: Word('врубайся', 4),
  imperativeFormal: Word('врубайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(врубаться.name.text, врубаться);

export { врубаться };