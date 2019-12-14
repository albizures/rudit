import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дозвониться: PerfectVerb = {
  name: Word('дозвониться', 6),
  singular1stPerson: Word('дозвонюсь', 6),
  singular2ndPerson: Word('дозвонишься', 6),
  singular3rdPerson: Word('дозвонится', 6),
  plural1stPerson: Word('дозвонимся', 6),
  plural2ndPerson: Word('дозвонитесь', 6),
  plural3rdPerson: Word('дозвонятся', 6),
  masculinePast: Word('дозвонился', 6),
  femininePast: Word('дозвонилась', 6),
  neuterPast: Word('дозвонилось', 6),
  pluralPast: Word('дозвонились', 6),
  imperativeInformal: Word('дозвонись', 6),
  imperativeFormal: Word('дозвонитесь', 6),
  imperfect: [],
};

perfectVerbs.set(дозвониться.name.text, дозвониться);

export { дозвониться };