import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекататься: PerfectVerb = {
  name: Word('перекататься', 7),
  singular1stPerson: Word('перекатаюсь', 7),
  singular2ndPerson: Word('перекатаешься', 7),
  singular3rdPerson: Word('перекатается', 7),
  plural1stPerson: Word('перекатаемся', 7),
  plural2ndPerson: Word('перекатаетесь', 7),
  plural3rdPerson: Word('перекатаются', 7),
  masculinePast: Word('перекатался', 7),
  femininePast: Word('перекаталась', 7),
  neuterPast: Word('перекаталось', 7),
  pluralPast: Word('перекатались', 7),
  imperativeInformal: Word('перекатайся', 7),
  imperativeFormal: Word('перекатайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перекататься.name.text, перекататься);

export { перекататься };