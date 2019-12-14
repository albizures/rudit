import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выключаться: PerfectVerb = {
  name: Word('выключаться', 6),
  singular1stPerson: Word('выключаюсь', 6),
  singular2ndPerson: Word('выключаешься', 6),
  singular3rdPerson: Word('выключается', 6),
  plural1stPerson: Word('выключаемся', 6),
  plural2ndPerson: Word('выключаетесь', 6),
  plural3rdPerson: Word('выключаются', 6),
  masculinePast: Word('выключался', 6),
  femininePast: Word('выключалась', 6),
  neuterPast: Word('выключалось', 6),
  pluralPast: Word('выключались', 6),
  imperativeInformal: Word('выключайся', 6),
  imperativeFormal: Word('выключайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(выключаться.name.text, выключаться);

export { выключаться };