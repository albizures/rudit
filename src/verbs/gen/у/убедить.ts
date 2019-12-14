import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убедить: PerfectVerb = {
  name: Word('убедить', 4),
  singular1stPerson: Word('', -1),
  singular2ndPerson: Word('убедишь', 4),
  singular3rdPerson: Word('убедит', 4),
  plural1stPerson: Word('убедим', 4),
  plural2ndPerson: Word('убедите', 4),
  plural3rdPerson: Word('убедят', 4),
  masculinePast: Word('убедил', 4),
  femininePast: Word('убедила', 4),
  neuterPast: Word('убедило', 4),
  pluralPast: Word('убедили', 4),
  imperativeInformal: Word('убеди', 4),
  imperativeFormal: Word('убедите', 4),
  imperfect: ['убеждать'],
};

perfectVerbs.set(убедить.name.text, убедить);

export { убедить };