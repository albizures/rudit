import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ожесточаться: PerfectVerb = {
  name: Word('ожесточаться', 7),
  singular1stPerson: Word('ожесточаюсь', 7),
  singular2ndPerson: Word('ожесточаешься', 7),
  singular3rdPerson: Word('ожесточается', 7),
  plural1stPerson: Word('ожесточаемся', 7),
  plural2ndPerson: Word('ожесточаетесь', 7),
  plural3rdPerson: Word('ожесточаются', 7),
  masculinePast: Word('ожесточался', 7),
  femininePast: Word('ожесточалась', 7),
  neuterPast: Word('ожесточалось', 7),
  pluralPast: Word('ожесточались', 7),
  imperativeInformal: Word('ожесточайся', 7),
  imperativeFormal: Word('ожесточайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(ожесточаться.name.text, ожесточаться);

export { ожесточаться };