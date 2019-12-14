import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насмехаться: PerfectVerb = {
  name: Word('насмехаться', 6),
  singular1stPerson: Word('насмехаюсь', 6),
  singular2ndPerson: Word('насмехаешься', 6),
  singular3rdPerson: Word('насмехается', 6),
  plural1stPerson: Word('насмехаемся', 6),
  plural2ndPerson: Word('насмехаетесь', 6),
  plural3rdPerson: Word('насмехаются', 6),
  masculinePast: Word('насмехался', 6),
  femininePast: Word('насмехалась', 6),
  neuterPast: Word('насмехалось', 6),
  pluralPast: Word('насмехались', 6),
  imperativeInformal: Word('насмехайся', 6),
  imperativeFormal: Word('насмехайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(насмехаться.name.text, насмехаться);

export { насмехаться };