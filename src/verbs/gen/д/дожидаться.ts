import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дожидаться: PerfectVerb = {
  name: Word('дожидаться', 5),
  singular1stPerson: Word('дожидаюсь', 5),
  singular2ndPerson: Word('дожидаешься', 5),
  singular3rdPerson: Word('дожидается', 5),
  plural1stPerson: Word('дожидаемся', 5),
  plural2ndPerson: Word('дожидаетесь', 5),
  plural3rdPerson: Word('дожидаются', 5),
  masculinePast: Word('дожидался', 5),
  femininePast: Word('дожидалась', 5),
  neuterPast: Word('дожидалось', 5),
  pluralPast: Word('дожидались', 5),
  imperativeInformal: Word('дожидайся', 5),
  imperativeFormal: Word('дожидайтесь', 5),
  imperfect: ['дождаться'],
};

perfectVerbs.set(дожидаться.name.text, дожидаться);

export { дожидаться };