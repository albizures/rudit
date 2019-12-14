import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дымиться: PerfectVerb = {
  name: Word('дымиться', 3),
  singular1stPerson: Word('дымлюсь', 4),
  singular2ndPerson: Word('дымишься', 3),
  singular3rdPerson: Word('дымится', 3),
  plural1stPerson: Word('дымимся', 3),
  plural2ndPerson: Word('дымитесь', 3),
  plural3rdPerson: Word('дымятся', 3),
  masculinePast: Word('дымился', 3),
  femininePast: Word('дымилась', 3),
  neuterPast: Word('дымилось', 3),
  pluralPast: Word('дымились', 3),
  imperativeInformal: Word('дымись', 3),
  imperativeFormal: Word('дымитесь', 3),
  imperfect: [],
};

perfectVerbs.set(дымиться.name.text, дымиться);

export { дымиться };