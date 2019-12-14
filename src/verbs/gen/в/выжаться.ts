import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выжаться: PerfectVerb = {
  name: Word('выжаться', 1),
  singular1stPerson: Word('выжмусь', 1),
  singular2ndPerson: Word('выжмешься', 1),
  singular3rdPerson: Word('выжмется', 1),
  plural1stPerson: Word('выжмемся', 1),
  plural2ndPerson: Word('выжметесь', 1),
  plural3rdPerson: Word('выжмутся', 1),
  masculinePast: Word('выжался', 1),
  femininePast: Word('выжалась', 1),
  neuterPast: Word('выжалось', 1),
  pluralPast: Word('выжались', 1),
  imperativeInformal: Word('выжмись', 1),
  imperativeFormal: Word('выжмитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выжаться.name.text, выжаться);

export { выжаться };