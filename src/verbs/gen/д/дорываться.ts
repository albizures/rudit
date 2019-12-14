import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорываться: PerfectVerb = {
  name: Word('дорываться', 5),
  singular1stPerson: Word('дорываюсь', 5),
  singular2ndPerson: Word('дорываешься', 5),
  singular3rdPerson: Word('дорывается', 5),
  plural1stPerson: Word('дорываемся', 5),
  plural2ndPerson: Word('дорываетесь', 5),
  plural3rdPerson: Word('дорываются', 5),
  masculinePast: Word('дорывался', 5),
  femininePast: Word('дорывалась', 5),
  neuterPast: Word('дорывалось', 5),
  pluralPast: Word('дорывались', 5),
  imperativeInformal: Word('дорывайся', 5),
  imperativeFormal: Word('дорывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(дорываться.name.text, дорываться);

export { дорываться };