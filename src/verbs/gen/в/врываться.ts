import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const врываться: PerfectVerb = {
  name: Word('врываться', 4),
  singular1stPerson: Word('врываюсь', 4),
  singular2ndPerson: Word('врываешься', 4),
  singular3rdPerson: Word('врывается', 4),
  plural1stPerson: Word('врываемся', 4),
  plural2ndPerson: Word('врываетесь', 4),
  plural3rdPerson: Word('врываются', 4),
  masculinePast: Word('врывался', 4),
  femininePast: Word('врывалась', 4),
  neuterPast: Word('врывалось', 4),
  pluralPast: Word('врывались', 4),
  imperativeInformal: Word('врывайся', 4),
  imperativeFormal: Word('врывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(врываться.name.text, врываться);

export { врываться };