import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ужалить: PerfectVerb = {
  name: Word('ужалить', 2),
  singular1stPerson: Word('ужалю', 2),
  singular2ndPerson: Word('ужалишь', 2),
  singular3rdPerson: Word('ужалит', 2),
  plural1stPerson: Word('ужалим', 2),
  plural2ndPerson: Word('ужалите', 2),
  plural3rdPerson: Word('ужалят', 2),
  masculinePast: Word('ужалил', 2),
  femininePast: Word('ужалила', 2),
  neuterPast: Word('ужалило', 2),
  pluralPast: Word('ужалили', 2),
  imperativeInformal: Word('ужаль', 2),
  imperativeFormal: Word('ужальте', 2),
  imperfect: ['жалить'],
};

perfectVerbs.set(ужалить.name.text, ужалить);

export { ужалить };