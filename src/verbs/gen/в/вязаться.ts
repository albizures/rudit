import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вязаться: PerfectVerb = {
  name: Word('вязаться', 3),
  singular1stPerson: Word('вяжусь', 3),
  singular2ndPerson: Word('вяжешься', 1),
  singular3rdPerson: Word('вяжется', 1),
  plural1stPerson: Word('вяжемся', 1),
  plural2ndPerson: Word('вяжетесь', 1),
  plural3rdPerson: Word('вяжутся', 1),
  masculinePast: Word('вязался', 3),
  femininePast: Word('вязалась', 3),
  neuterPast: Word('вязалось', 3),
  pluralPast: Word('вязались', 3),
  imperativeInformal: Word('вяжись', 3),
  imperativeFormal: Word('вяжитесь', 3),
  imperfect: [],
};

perfectVerbs.set(вязаться.name.text, вязаться);

export { вязаться };