import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подключаться: PerfectVerb = {
  name: Word('подключаться', 7),
  singular1stPerson: Word('подключаюсь', 7),
  singular2ndPerson: Word('подключаешься', 7),
  singular3rdPerson: Word('подключается', 7),
  plural1stPerson: Word('подключаемся', 7),
  plural2ndPerson: Word('подключаетесь', 7),
  plural3rdPerson: Word('подключаются', 7),
  masculinePast: Word('подключался', 7),
  femininePast: Word('подключалась', 7),
  neuterPast: Word('подключалось', 7),
  pluralPast: Word('подключались', 7),
  imperativeInformal: Word('подключайся', 7),
  imperativeFormal: Word('подключайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(подключаться.name.text, подключаться);

export { подключаться };