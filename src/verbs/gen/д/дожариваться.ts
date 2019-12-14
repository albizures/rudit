import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дожариваться: PerfectVerb = {
  name: Word('дожариваться', 3),
  singular1stPerson: Word('дожариваюсь', 3),
  singular2ndPerson: Word('дожариваешься', 3),
  singular3rdPerson: Word('дожаривается', 3),
  plural1stPerson: Word('дожариваемся', 3),
  plural2ndPerson: Word('дожариваетесь', 3),
  plural3rdPerson: Word('дожариваются', 3),
  masculinePast: Word('дожаривался', 3),
  femininePast: Word('дожаривалась', 3),
  neuterPast: Word('дожаривалось', 3),
  pluralPast: Word('дожаривались', 3),
  imperativeInformal: Word('дожаривайся', 3),
  imperativeFormal: Word('дожаривайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(дожариваться.name.text, дожариваться);

export { дожариваться };