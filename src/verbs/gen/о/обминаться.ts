import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обминаться: PerfectVerb = {
  name: Word('обминаться', 5),
  singular1stPerson: Word('обминаюсь', 5),
  singular2ndPerson: Word('обминаешься', 5),
  singular3rdPerson: Word('обминается', 5),
  plural1stPerson: Word('обминаемся', 5),
  plural2ndPerson: Word('обминаетесь', 5),
  plural3rdPerson: Word('обминаются', 5),
  masculinePast: Word('обминался', 5),
  femininePast: Word('обминалась', 5),
  neuterPast: Word('обминалось', 5),
  pluralPast: Word('обминались', 5),
  imperativeInformal: Word('обминайся', 5),
  imperativeFormal: Word('обминайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обминаться.name.text, обминаться);

export { обминаться };