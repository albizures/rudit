import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сказываться: PerfectVerb = {
  name: Word('сказываться', 2),
  singular1stPerson: Word('сказываюсь', 2),
  singular2ndPerson: Word('сказываешься', 2),
  singular3rdPerson: Word('сказывается', 2),
  plural1stPerson: Word('сказываемся', 2),
  plural2ndPerson: Word('сказываетесь', 2),
  plural3rdPerson: Word('сказываются', 2),
  masculinePast: Word('сказывался', 2),
  femininePast: Word('сказывалась', 2),
  neuterPast: Word('сказывалось', 2),
  pluralPast: Word('сказывались', 2),
  imperativeInformal: Word('сказывайся', 2),
  imperativeFormal: Word('сказывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(сказываться.name.text, сказываться);

export { сказываться };