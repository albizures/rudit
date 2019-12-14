import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сеяться: PerfectVerb = {
  name: Word('сеяться', 1),
  singular1stPerson: Word('сеюсь', 1),
  singular2ndPerson: Word('сеешься', 1),
  singular3rdPerson: Word('сеется', 1),
  plural1stPerson: Word('сеемся', 1),
  plural2ndPerson: Word('сеетесь', 1),
  plural3rdPerson: Word('сеются', 1),
  masculinePast: Word('сеялся', 1),
  femininePast: Word('сеялась', 1),
  neuterPast: Word('сеялось', 1),
  pluralPast: Word('сеялись', 1),
  imperativeInformal: Word('сейся', 1),
  imperativeFormal: Word('сейтесь', 1),
  imperfect: [],
};

perfectVerbs.set(сеяться.name.text, сеяться);

export { сеяться };