import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изливаться: PerfectVerb = {
  name: Word('изливаться', 5),
  singular1stPerson: Word('изливаюсь', 5),
  singular2ndPerson: Word('изливаешься', 5),
  singular3rdPerson: Word('изливается', 5),
  plural1stPerson: Word('изливаемся', 5),
  plural2ndPerson: Word('изливаетесь', 5),
  plural3rdPerson: Word('изливаются', 5),
  masculinePast: Word('изливался', 5),
  femininePast: Word('изливалась', 5),
  neuterPast: Word('изливалось', 5),
  pluralPast: Word('изливались', 5),
  imperativeInformal: Word('изливайся', 5),
  imperativeFormal: Word('изливайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изливаться.name.text, изливаться);

export { изливаться };