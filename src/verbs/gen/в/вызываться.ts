import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вызываться: PerfectVerb = {
  name: Word('вызываться', 5),
  singular1stPerson: Word('вызываюсь', 5),
  singular2ndPerson: Word('вызываешься', 5),
  singular3rdPerson: Word('вызывается', 5),
  plural1stPerson: Word('вызываемся', 5),
  plural2ndPerson: Word('вызываетесь', 5),
  plural3rdPerson: Word('вызываются', 5),
  masculinePast: Word('вызывался', 5),
  femininePast: Word('вызывалась', 5),
  neuterPast: Word('вызывалось', 5),
  pluralPast: Word('вызывались', 5),
  imperativeInformal: Word('вызывайся', 5),
  imperativeFormal: Word('вызывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вызываться.name.text, вызываться);

export { вызываться };