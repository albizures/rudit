import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассасываться: PerfectVerb = {
  name: Word('рассасываться', 4),
  singular1stPerson: Word('рассасываюсь', 4),
  singular2ndPerson: Word('рассасываешься', 4),
  singular3rdPerson: Word('рассасывается', 4),
  plural1stPerson: Word('рассасываемся', 4),
  plural2ndPerson: Word('рассасываетесь', 4),
  plural3rdPerson: Word('рассасываются', 4),
  masculinePast: Word('рассасывался', 4),
  femininePast: Word('рассасывалась', 4),
  neuterPast: Word('рассасывалось', 4),
  pluralPast: Word('рассасывались', 4),
  imperativeInformal: Word('рассасывайся', 4),
  imperativeFormal: Word('рассасывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(рассасываться.name.text, рассасываться);

export { рассасываться };