import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поливаться: PerfectVerb = {
  name: Word('поливаться', 5),
  singular1stPerson: Word('поливаюсь', 5),
  singular2ndPerson: Word('поливаешься', 5),
  singular3rdPerson: Word('поливается', 5),
  plural1stPerson: Word('поливаемся', 5),
  plural2ndPerson: Word('поливаетесь', 5),
  plural3rdPerson: Word('поливаются', 5),
  masculinePast: Word('поливался', 5),
  femininePast: Word('поливалась', 5),
  neuterPast: Word('поливалось', 5),
  pluralPast: Word('поливались', 5),
  imperativeInformal: Word('поливайся', 5),
  imperativeFormal: Word('поливайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(поливаться.name.text, поливаться);

export { поливаться };