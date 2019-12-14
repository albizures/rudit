import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удалить: PerfectVerb = {
  name: Word('удалить', 4),
  singular1stPerson: Word('удалю', 4),
  singular2ndPerson: Word('удалишь', 4),
  singular3rdPerson: Word('удалит', 4),
  plural1stPerson: Word('удалим', 4),
  plural2ndPerson: Word('удалите', 4),
  plural3rdPerson: Word('удалят', 4),
  masculinePast: Word('удалил', 4),
  femininePast: Word('удалила', 4),
  neuterPast: Word('удалило', 4),
  pluralPast: Word('удалили', 4),
  imperativeInformal: Word('удали', 4),
  imperativeFormal: Word('удалите', 4),
  imperfect: ['удалять'],
};

perfectVerbs.set(удалить.name.text, удалить);

export { удалить };