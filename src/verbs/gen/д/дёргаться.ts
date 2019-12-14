import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дёргаться: PerfectVerb = {
  name: Word('дёргаться', 1),
  singular1stPerson: Word('дёргаюсь', 1),
  singular2ndPerson: Word('дёргаешься', 1),
  singular3rdPerson: Word('дёргается', 1),
  plural1stPerson: Word('дёргаемся', 1),
  plural2ndPerson: Word('дёргаетесь', 1),
  plural3rdPerson: Word('дёргаются', 1),
  masculinePast: Word('дёргался', 1),
  femininePast: Word('дёргалась', 1),
  neuterPast: Word('дёргалось', 1),
  pluralPast: Word('дёргались', 1),
  imperativeInformal: Word('дёргайся', 1),
  imperativeFormal: Word('дёргайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(дёргаться.name.text, дёргаться);

export { дёргаться };