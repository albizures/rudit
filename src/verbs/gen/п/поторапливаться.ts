import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поторапливаться: PerfectVerb = {
  name: Word('поторапливаться', 5),
  singular1stPerson: Word('поторапливаюсь', 5),
  singular2ndPerson: Word('поторапливаешься', 5),
  singular3rdPerson: Word('поторапливается', 5),
  plural1stPerson: Word('поторапливаемся', 5),
  plural2ndPerson: Word('поторапливаетесь', 5),
  plural3rdPerson: Word('поторапливаются', 5),
  masculinePast: Word('поторапливался', 5),
  femininePast: Word('поторапливалась', 5),
  neuterPast: Word('поторапливалось', 5),
  pluralPast: Word('поторапливались', 5),
  imperativeInformal: Word('поторапливайся', 5),
  imperativeFormal: Word('поторапливайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(поторапливаться.name.text, поторапливаться);

export { поторапливаться };