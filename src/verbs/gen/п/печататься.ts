import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const печататься: PerfectVerb = {
  name: Word('печататься', 3),
  singular1stPerson: Word('печатаюсь', 3),
  singular2ndPerson: Word('печатаешься', 3),
  singular3rdPerson: Word('печатается', 3),
  plural1stPerson: Word('печатаемся', 3),
  plural2ndPerson: Word('печатаетесь', 3),
  plural3rdPerson: Word('печатаются', 3),
  masculinePast: Word('печатался', 3),
  femininePast: Word('печаталась', 3),
  neuterPast: Word('печаталось', 3),
  pluralPast: Word('печатались', 3),
  imperativeInformal: Word('печатайся', 3),
  imperativeFormal: Word('печатайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(печататься.name.text, печататься);

export { печататься };