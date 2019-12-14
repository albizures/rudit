import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изнервничаться: PerfectVerb = {
  name: Word('изнервничаться', 3),
  singular1stPerson: Word('изнервничаюсь', 3),
  singular2ndPerson: Word('изнервничаешься', 3),
  singular3rdPerson: Word('изнервничается', 3),
  plural1stPerson: Word('изнервничаемся', 3),
  plural2ndPerson: Word('изнервничаетесь', 3),
  plural3rdPerson: Word('изнервничаются', 3),
  masculinePast: Word('изнервничался', 3),
  femininePast: Word('изнервничалась', 3),
  neuterPast: Word('изнервничалось', 3),
  pluralPast: Word('изнервничались', 3),
  imperativeInformal: Word('изнервничайся', 3),
  imperativeFormal: Word('изнервничайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(изнервничаться.name.text, изнервничаться);

export { изнервничаться };