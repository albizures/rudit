import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкатываться: PerfectVerb = {
  name: Word('вкатываться', 2),
  singular1stPerson: Word('вкатываюсь', 2),
  singular2ndPerson: Word('вкатываешься', 2),
  singular3rdPerson: Word('вкатывается', 2),
  plural1stPerson: Word('вкатываемся', 2),
  plural2ndPerson: Word('вкатываетесь', 2),
  plural3rdPerson: Word('вкатываются', 2),
  masculinePast: Word('вкатывался', 2),
  femininePast: Word('вкатывалась', 2),
  neuterPast: Word('вкатывалось', 2),
  pluralPast: Word('вкатывались', 2),
  imperativeInformal: Word('вкатывайся', 2),
  imperativeFormal: Word('вкатывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(вкатываться.name.text, вкатываться);

export { вкатываться };