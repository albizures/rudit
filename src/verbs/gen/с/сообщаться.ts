import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сообщаться: PerfectVerb = {
  name: Word('сообщаться', 5),
  singular1stPerson: Word('сообщаюсь', 5),
  singular2ndPerson: Word('сообщаешься', 5),
  singular3rdPerson: Word('сообщается', 5),
  plural1stPerson: Word('сообщаемся', 5),
  plural2ndPerson: Word('сообщаетесь', 5),
  plural3rdPerson: Word('сообщаются', 5),
  masculinePast: Word('сообщался', 5),
  femininePast: Word('сообщалась', 5),
  neuterPast: Word('сообщалось', 5),
  pluralPast: Word('сообщались', 5),
  imperativeInformal: Word('сообщайся', 5),
  imperativeFormal: Word('сообщайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(сообщаться.name.text, сообщаться);

export { сообщаться };