import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const виднеться: PerfectVerb = {
  name: Word('виднеться', 4),
  singular1stPerson: Word('виднеюсь', 4),
  singular2ndPerson: Word('виднеешься', 4),
  singular3rdPerson: Word('виднеется', 4),
  plural1stPerson: Word('виднеемся', 4),
  plural2ndPerson: Word('виднеетесь', 4),
  plural3rdPerson: Word('виднеются', 4),
  masculinePast: Word('виднелся', 4),
  femininePast: Word('виднелась', 4),
  neuterPast: Word('виднелось', 4),
  pluralPast: Word('виднелись', 4),
  imperativeInformal: Word('виднейся', 4),
  imperativeFormal: Word('виднейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(виднеться.name.text, виднеться);

export { виднеться };