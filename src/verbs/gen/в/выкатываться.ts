import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкатываться: PerfectVerb = {
  name: Word('выкатываться', 3),
  singular1stPerson: Word('выкатываюсь', 3),
  singular2ndPerson: Word('выкатываешься', 3),
  singular3rdPerson: Word('выкатывается', 3),
  plural1stPerson: Word('выкатываемся', 3),
  plural2ndPerson: Word('выкатываетесь', 3),
  plural3rdPerson: Word('выкатываются', 3),
  masculinePast: Word('выкатывался', 3),
  femininePast: Word('выкатывалась', 3),
  neuterPast: Word('выкатывалось', 3),
  pluralPast: Word('выкатывались', 3),
  imperativeInformal: Word('выкатывайся', 3),
  imperativeFormal: Word('выкатывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выкатываться.name.text, выкатываться);

export { выкатываться };