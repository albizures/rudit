import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слиться: PerfectVerb = {
  name: Word('слиться', 2),
  singular1stPerson: Word('сольюсь', 4),
  singular2ndPerson: Word('сольёшься', 1),
  singular3rdPerson: Word('сольётся', 1),
  plural1stPerson: Word('сольёмся', 1),
  plural2ndPerson: Word('сольётесь', 6),
  plural3rdPerson: Word('сольются', 4),
  masculinePast: Word('слился', 2),
  femininePast: Word('слилась', 4),
  neuterPast: Word('слилось//слило'сь', 2),
  pluralPast: Word('слились//слили'сь', 2),
  imperativeInformal: Word('слейся', 2),
  imperativeFormal: Word('слейтесь', 2),
  imperfect: [],
};

perfectVerbs.set(слиться.name.text, слиться);

export { слиться };