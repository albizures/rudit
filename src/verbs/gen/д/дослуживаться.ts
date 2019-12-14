import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дослуживаться: PerfectVerb = {
  name: Word('дослуживаться', 4),
  singular1stPerson: Word('дослуживаюсь', 4),
  singular2ndPerson: Word('дослуживаешься', 4),
  singular3rdPerson: Word('дослуживается', 4),
  plural1stPerson: Word('дослуживаемся', 4),
  plural2ndPerson: Word('дослуживаетесь', 4),
  plural3rdPerson: Word('дослуживаются', 4),
  masculinePast: Word('дослуживался', 4),
  femininePast: Word('дослуживалась', 4),
  neuterPast: Word('дослуживалось', 4),
  pluralPast: Word('дослуживались', 4),
  imperativeInformal: Word('дослуживайся', 4),
  imperativeFormal: Word('дослуживайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(дослуживаться.name.text, дослуживаться);

export { дослуживаться };