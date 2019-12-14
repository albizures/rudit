import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покататься: PerfectVerb = {
  name: Word('покататься', 5),
  singular1stPerson: Word('покатаюсь', 5),
  singular2ndPerson: Word('покатаешься', 5),
  singular3rdPerson: Word('покатается', 5),
  plural1stPerson: Word('покатаемся', 5),
  plural2ndPerson: Word('покатаетесь', 5),
  plural3rdPerson: Word('покатаются', 5),
  masculinePast: Word('покатался', 5),
  femininePast: Word('покаталась', 5),
  neuterPast: Word('покаталось', 5),
  pluralPast: Word('покатались', 5),
  imperativeInformal: Word('покатайся', 5),
  imperativeFormal: Word('покатайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(покататься.name.text, покататься);

export { покататься };