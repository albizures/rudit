import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огораживаться: PerfectVerb = {
  name: Word('огораживаться', 4),
  singular1stPerson: Word('огораживаюсь', 4),
  singular2ndPerson: Word('огораживаешься', 4),
  singular3rdPerson: Word('огораживается', 4),
  plural1stPerson: Word('огораживаемся', 4),
  plural2ndPerson: Word('огораживаетесь', 4),
  plural3rdPerson: Word('огораживаются', 4),
  masculinePast: Word('огораживался', 4),
  femininePast: Word('огораживалась', 4),
  neuterPast: Word('огораживалось', 4),
  pluralPast: Word('огораживались', 4),
  imperativeInformal: Word('огораживайся', 4),
  imperativeFormal: Word('огораживайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(огораживаться.name.text, огораживаться);

export { огораживаться };