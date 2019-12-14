import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const служить: PerfectVerb = {
  name: Word('служить', 4),
  singular1stPerson: Word('служу', 4),
  singular2ndPerson: Word('служишь', 2),
  singular3rdPerson: Word('служит', 2),
  plural1stPerson: Word('служим', 2),
  plural2ndPerson: Word('служите', 2),
  plural3rdPerson: Word('служат', 2),
  masculinePast: Word('служил', 4),
  femininePast: Word('служила', 4),
  neuterPast: Word('служило', 4),
  pluralPast: Word('служили', 4),
  imperativeInformal: Word('служи', 4),
  imperativeFormal: Word('служите', 4),
  imperfect: ['послужить'],
};

perfectVerbs.set(служить.name.text, служить);

export { служить };