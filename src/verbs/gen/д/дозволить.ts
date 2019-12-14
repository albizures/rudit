import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дозволить: PerfectVerb = {
  name: Word('дозволить', 4),
  singular1stPerson: Word('дозволю', 4),
  singular2ndPerson: Word('дозволишь', 4),
  singular3rdPerson: Word('дозволит', 4),
  plural1stPerson: Word('дозволим', 4),
  plural2ndPerson: Word('дозволите', 4),
  plural3rdPerson: Word('дозволят', 4),
  masculinePast: Word('дозволил', 4),
  femininePast: Word('дозволила', 4),
  neuterPast: Word('дозволило', 4),
  pluralPast: Word('дозволили', 4),
  imperativeInformal: Word('дозволь', 4),
  imperativeFormal: Word('дозвольте', 4),
  imperfect: [],
};

perfectVerbs.set(дозволить.name.text, дозволить);

export { дозволить };