import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оказываться: PerfectVerb = {
  name: Word('оказываться', 2),
  singular1stPerson: Word('оказываюсь', 2),
  singular2ndPerson: Word('оказываешься', 2),
  singular3rdPerson: Word('оказывается', 2),
  plural1stPerson: Word('оказываемся', 2),
  plural2ndPerson: Word('оказываетесь', 2),
  plural3rdPerson: Word('оказываются', 2),
  masculinePast: Word('оказывался', 2),
  femininePast: Word('оказывалась', 2),
  neuterPast: Word('оказывалось', 2),
  pluralPast: Word('оказывались', 2),
  imperativeInformal: Word('оказывайся', 2),
  imperativeFormal: Word('оказывайтесь', 2),
  imperfect: ['оказаться'],
};

perfectVerbs.set(оказываться.name.text, оказываться);

export { оказываться };