import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примелькаться: PerfectVerb = {
  name: Word('примелькаться', 8),
  singular1stPerson: Word('примелькаюсь', 8),
  singular2ndPerson: Word('примелькаешься', 8),
  singular3rdPerson: Word('примелькается', 8),
  plural1stPerson: Word('примелькаемся', 8),
  plural2ndPerson: Word('примелькаетесь', 8),
  plural3rdPerson: Word('примелькаются', 8),
  masculinePast: Word('примелькался', 8),
  femininePast: Word('примелькалась', 8),
  neuterPast: Word('примелькалось', 8),
  pluralPast: Word('примелькались', 8),
  imperativeInformal: Word('примелькайся', 8),
  imperativeFormal: Word('примелькайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(примелькаться.name.text, примелькаться);

export { примелькаться };