import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задвигаться: PerfectVerb = {
  name: Word('задвигаться', 4),
  singular1stPerson: Word('задвигаюсь', 4),
  singular2ndPerson: Word('задвигаешься', 4),
  singular3rdPerson: Word('задвигается', 4),
  plural1stPerson: Word('задвигаемся', 4),
  plural2ndPerson: Word('задвигаетесь', 4),
  plural3rdPerson: Word('задвигаются', 4),
  masculinePast: Word('задвигался', 4),
  femininePast: Word('задвигалась', 4),
  neuterPast: Word('задвигалось', 4),
  pluralPast: Word('задвигались', 4),
  imperativeInformal: Word('задвигайся', 4),
  imperativeFormal: Word('задвигайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(задвигаться.name.text, задвигаться);

export { задвигаться };