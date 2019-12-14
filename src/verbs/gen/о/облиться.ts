import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облиться: PerfectVerb = {
  name: Word('облиться', 3),
  singular1stPerson: Word('обольюсь', 5),
  singular2ndPerson: Word('обольёшься', 0),
  singular3rdPerson: Word('обольётся', 0),
  plural1stPerson: Word('обольёмся', 0),
  plural2ndPerson: Word('обольётесь', 7),
  plural3rdPerson: Word('обольются', 5),
  masculinePast: Word('облился', 3),
  femininePast: Word('облилась', 5),
  neuterPast: Word('облилось//облило'сь', 3),
  pluralPast: Word('облились//облили'сь', 3),
  imperativeInformal: Word('облейся', 3),
  imperativeFormal: Word('облейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(облиться.name.text, облиться);

export { облиться };