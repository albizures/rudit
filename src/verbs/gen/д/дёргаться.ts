import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дёргаться: PerfectVerb = {
  name: Word('дёргаться', 4),
  singular1stPerson: Word('дёргаюсь', 4),
  singular2ndPerson: Word('дёргаешься', 4),
  singular3rdPerson: Word('дёргается', 4),
  plural1stPerson: Word('дёргаемся', 4),
  plural2ndPerson: Word('дёргаетесь', 4),
  plural3rdPerson: Word('дёргаются', 4),
  masculinePast: Word('дёргался', 4),
  femininePast: Word('дёргалась', 4),
  neuterPast: Word('дёргалось', 4),
  pluralPast: Word('дёргались', 4),
  imperativeInformal: Word('дёргайся', 4),
  imperativeFormal: Word('дёргайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(дёргаться.name.text, дёргаться);

export { дёргаться };