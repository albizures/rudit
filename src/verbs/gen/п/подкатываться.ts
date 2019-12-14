import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкатываться: PerfectVerb = {
  name: Word('подкатываться', 4),
  singular1stPerson: Word('подкатываюсь', 4),
  singular2ndPerson: Word('подкатываешься', 4),
  singular3rdPerson: Word('подкатывается', 4),
  plural1stPerson: Word('подкатываемся', 4),
  plural2ndPerson: Word('подкатываетесь', 4),
  plural3rdPerson: Word('подкатываются', 4),
  masculinePast: Word('подкатывался', 4),
  femininePast: Word('подкатывалась', 4),
  neuterPast: Word('подкатывалось', 4),
  pluralPast: Word('подкатывались', 4),
  imperativeInformal: Word('подкатывайся', 4),
  imperativeFormal: Word('подкатывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подкатываться.name.text, подкатываться);

export { подкатываться };