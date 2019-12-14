import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поздороваться: PerfectVerb = {
  name: Word('поздороваться', 6),
  singular1stPerson: Word('поздороваюсь', 6),
  singular2ndPerson: Word('поздороваешься', 6),
  singular3rdPerson: Word('поздоровается', 6),
  plural1stPerson: Word('поздороваемся', 6),
  plural2ndPerson: Word('поздороваетесь', 6),
  plural3rdPerson: Word('поздороваются', 6),
  masculinePast: Word('поздоровался', 6),
  femininePast: Word('поздоровалась', 6),
  neuterPast: Word('поздоровалось', 6),
  pluralPast: Word('поздоровались', 6),
  imperativeInformal: Word('поздоровайся', 6),
  imperativeFormal: Word('поздоровайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(поздороваться.name.text, поздороваться);

export { поздороваться };