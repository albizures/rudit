import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жалить: PerfectVerb = {
  name: Word('жалить', 1),
  singular1stPerson: Word('жалю', 1),
  singular2ndPerson: Word('жалишь', 1),
  singular3rdPerson: Word('жалит', 1),
  plural1stPerson: Word('жалим', 1),
  plural2ndPerson: Word('жалите', 1),
  plural3rdPerson: Word('жалят', 1),
  masculinePast: Word('жалил', 1),
  femininePast: Word('жалила', 1),
  neuterPast: Word('жалило', 1),
  pluralPast: Word('жалили', 1),
  imperativeInformal: Word('жаль', 1),
  imperativeFormal: Word('жальте', 1),
  imperfect: ['ужалить'],
};

perfectVerbs.set(жалить.name.text, жалить);

export { жалить };