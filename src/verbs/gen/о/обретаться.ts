import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обретаться: PerfectVerb = {
  name: Word('обретаться', 5),
  singular1stPerson: Word('обретаюсь', 5),
  singular2ndPerson: Word('обретаешься', 5),
  singular3rdPerson: Word('обретается', 5),
  plural1stPerson: Word('обретаемся', 5),
  plural2ndPerson: Word('обретаетесь', 5),
  plural3rdPerson: Word('обретаются', 5),
  masculinePast: Word('обретался', 5),
  femininePast: Word('обреталась', 5),
  neuterPast: Word('обреталось', 5),
  pluralPast: Word('обретались', 5),
  imperativeInformal: Word('обретайся', 5),
  imperativeFormal: Word('обретайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обретаться.name.text, обретаться);

export { обретаться };