import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дознаться: PerfectVerb = {
  name: Word('дознаться', 4),
  singular1stPerson: Word('дознаюсь', 4),
  singular2ndPerson: Word('дознаешься', 4),
  singular3rdPerson: Word('дознается', 4),
  plural1stPerson: Word('дознаемся', 4),
  plural2ndPerson: Word('дознаетесь', 4),
  plural3rdPerson: Word('дознаются', 4),
  masculinePast: Word('дознался', 4),
  femininePast: Word('дозналась', 4),
  neuterPast: Word('дозналось', 4),
  pluralPast: Word('дознались', 4),
  imperativeInformal: Word('дознайся', 4),
  imperativeFormal: Word('дознайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(дознаться.name.text, дознаться);

export { дознаться };