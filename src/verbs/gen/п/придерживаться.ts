import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придерживаться: PerfectVerb = {
  name: Word('придерживаться', 4),
  singular1stPerson: Word('придерживаюсь', 4),
  singular2ndPerson: Word('придерживаешься', 4),
  singular3rdPerson: Word('придерживается', 4),
  plural1stPerson: Word('придерживаемся', 4),
  plural2ndPerson: Word('придерживаетесь', 4),
  plural3rdPerson: Word('придерживаются', 4),
  masculinePast: Word('придерживался', 4),
  femininePast: Word('придерживалась', 4),
  neuterPast: Word('придерживалось', 4),
  pluralPast: Word('придерживались', 4),
  imperativeInformal: Word('придерживайся', 4),
  imperativeFormal: Word('придерживайтесь', 4),
  imperfect: ['придержаться'],
};

perfectVerbs.set(придерживаться.name.text, придерживаться);

export { придерживаться };