import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обчищаться: PerfectVerb = {
  name: Word('обчищаться', 5),
  singular1stPerson: Word('обчищаюсь', 5),
  singular2ndPerson: Word('обчищаешься', 5),
  singular3rdPerson: Word('обчищается', 5),
  plural1stPerson: Word('обчищаемся', 5),
  plural2ndPerson: Word('обчищаетесь', 5),
  plural3rdPerson: Word('обчищаются', 5),
  masculinePast: Word('обчищался', 5),
  femininePast: Word('обчищалась', 5),
  neuterPast: Word('обчищалось', 5),
  pluralPast: Word('обчищались', 5),
  imperativeInformal: Word('обчищайся', 5),
  imperativeFormal: Word('обчищайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обчищаться.name.text, обчищаться);

export { обчищаться };