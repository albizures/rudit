import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нажиться: PerfectVerb = {
  name: Word('нажиться', 3),
  singular1stPerson: Word('наживусь', 5),
  singular2ndPerson: Word('наживёшься', 1),
  singular3rdPerson: Word('наживётся', 1),
  plural1stPerson: Word('наживёмся', 1),
  plural2ndPerson: Word('наживётесь', 1),
  plural3rdPerson: Word('наживутся', 5),
  masculinePast: Word('нажился', 3),
  femininePast: Word('нажилась', 5),
  neuterPast: Word('нажилось//нажило'сь', 3),
  pluralPast: Word('нажились//нажили'сь', 3),
  imperativeInformal: Word('наживись', 5),
  imperativeFormal: Word('наживитесь', 5),
  imperfect: [],
};

perfectVerbs.set(нажиться.name.text, нажиться);

export { нажиться };