import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приоткрываться: PerfectVerb = {
  name: Word('приоткрываться', 9),
  singular1stPerson: Word('приоткрываюсь', 9),
  singular2ndPerson: Word('приоткрываешься', 9),
  singular3rdPerson: Word('приоткрывается', 9),
  plural1stPerson: Word('приоткрываемся', 9),
  plural2ndPerson: Word('приоткрываетесь', 9),
  plural3rdPerson: Word('приоткрываются', 9),
  masculinePast: Word('приоткрывался', 9),
  femininePast: Word('приоткрывалась', 9),
  neuterPast: Word('приоткрывалось', 9),
  pluralPast: Word('приоткрывались', 9),
  imperativeInformal: Word('приоткрывайся', 9),
  imperativeFormal: Word('приоткрывайтесь', 9),
  imperfect: [],
};

perfectVerbs.set(приоткрываться.name.text, приоткрываться);

export { приоткрываться };