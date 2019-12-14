import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлиться: PerfectVerb = {
  name: Word('разлиться', 4),
  singular1stPerson: Word('разольюсь', 6),
  singular2ndPerson: Word('разольёшься', 6),
  singular3rdPerson: Word('разольётся', 6),
  plural1stPerson: Word('разольёмся', 6),
  plural2ndPerson: Word('разольётесь', 6),
  plural3rdPerson: Word('разольются', 6),
  masculinePast: Word('разлился', 4),
  femininePast: Word('разлилась', 6),
  neuterPast: Word('разлилось//разлило'сь', 4),
  pluralPast: Word('разлились//разлили'сь', 4),
  imperativeInformal: Word('разлейся', 4),
  imperativeFormal: Word('разлейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разлиться.name.text, разлиться);

export { разлиться };