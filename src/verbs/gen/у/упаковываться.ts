import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упаковываться: PerfectVerb = {
  name: Word('упаковываться', 4),
  singular1stPerson: Word('упаковываюсь', 4),
  singular2ndPerson: Word('упаковываешься', 4),
  singular3rdPerson: Word('упаковывается', 4),
  plural1stPerson: Word('упаковываемся', 4),
  plural2ndPerson: Word('упаковываетесь', 4),
  plural3rdPerson: Word('упаковываются', 4),
  masculinePast: Word('упаковывался', 4),
  femininePast: Word('упаковывалась', 4),
  neuterPast: Word('упаковывалось', 4),
  pluralPast: Word('упаковывались', 4),
  imperativeInformal: Word('упаковывайся', 4),
  imperativeFormal: Word('упаковывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(упаковываться.name.text, упаковываться);

export { упаковываться };