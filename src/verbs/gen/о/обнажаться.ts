import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнажаться: PerfectVerb = {
  name: Word('обнажаться', 5),
  singular1stPerson: Word('обнажаюсь', 5),
  singular2ndPerson: Word('обнажаешься', 5),
  singular3rdPerson: Word('обнажается', 5),
  plural1stPerson: Word('обнажаемся', 5),
  plural2ndPerson: Word('обнажаетесь', 5),
  plural3rdPerson: Word('обнажаются', 5),
  masculinePast: Word('обнажался', 5),
  femininePast: Word('обнажалась', 5),
  neuterPast: Word('обнажалось', 5),
  pluralPast: Word('обнажались', 5),
  imperativeInformal: Word('обнажайся', 5),
  imperativeFormal: Word('обнажайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обнажаться.name.text, обнажаться);

export { обнажаться };