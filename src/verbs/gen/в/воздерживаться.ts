import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воздерживаться: PerfectVerb = {
  name: Word('воздерживаться', 4),
  singular1stPerson: Word('воздерживаюсь', 4),
  singular2ndPerson: Word('воздерживаешься', 4),
  singular3rdPerson: Word('воздерживается', 4),
  plural1stPerson: Word('воздерживаемся', 4),
  plural2ndPerson: Word('воздерживаетесь', 4),
  plural3rdPerson: Word('воздерживаются', 4),
  masculinePast: Word('воздерживался', 4),
  femininePast: Word('воздерживалась', 4),
  neuterPast: Word('воздерживалось', 4),
  pluralPast: Word('воздерживались', 4),
  imperativeInformal: Word('воздерживайся', 4),
  imperativeFormal: Word('воздерживайтесь', 4),
  imperfect: ['воздержаться'],
};

perfectVerbs.set(воздерживаться.name.text, воздерживаться);

export { воздерживаться };