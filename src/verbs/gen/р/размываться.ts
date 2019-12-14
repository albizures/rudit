import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размываться: PerfectVerb = {
  name: Word('размываться', 6),
  singular1stPerson: Word('размываюсь', 6),
  singular2ndPerson: Word('размываешься', 6),
  singular3rdPerson: Word('размывается', 6),
  plural1stPerson: Word('размываемся', 6),
  plural2ndPerson: Word('размываетесь', 6),
  plural3rdPerson: Word('размываются', 6),
  masculinePast: Word('размывался', 6),
  femininePast: Word('размывалась', 6),
  neuterPast: Word('размывалось', 6),
  pluralPast: Word('размывались', 6),
  imperativeInformal: Word('размывайся', 6),
  imperativeFormal: Word('размывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(размываться.name.text, размываться);

export { размываться };