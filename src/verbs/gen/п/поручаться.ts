import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поручаться: PerfectVerb = {
  name: Word('поручаться', 5),
  singular1stPerson: Word('поручаюсь', 5),
  singular2ndPerson: Word('поручаешься', 5),
  singular3rdPerson: Word('поручается', 5),
  plural1stPerson: Word('поручаемся', 5),
  plural2ndPerson: Word('поручаетесь', 5),
  plural3rdPerson: Word('поручаются', 5),
  masculinePast: Word('поручался', 5),
  femininePast: Word('поручалась', 5),
  neuterPast: Word('поручалось', 5),
  pluralPast: Word('поручались', 5),
  imperativeInformal: Word('поручайся', 5),
  imperativeFormal: Word('поручайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(поручаться.name.text, поручаться);

export { поручаться };